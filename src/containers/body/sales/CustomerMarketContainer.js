import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toJS } from 'immutable';

// action
import { setCustomerChart, setCustomerMap } from 'store/modules/sales';
// component
import CustomerMarket from 'components/body/sales/CustomerMarket';
import Dropdown from 'components/common/Dropdown';

const propTypes = {
    customerChartData: PropTypes.object,
    customerMapData: PropTypes.object
};

const defaultProps = {
    predictionData: {},
    customerMapData: []
};

class CustomerMarketContainer extends Component {

    constructor(props) {
        super(props);

        this.customerSelectType = 'm';
        this.state = {
            customerChartOption: {
                chart: {
                    polar: true,
                    type: 'line'
                },
                credits: { enabled: false },
                accessibility: {
                    description: ''
                },
                title: {
                    text: '',
                    x: -80
                },
                pane: {
                    size: '80%'
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
                },
                legend: {
                    enabled: false
                },
                series: [],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom'
                            },
                            pane: {
                                size: '70%'
                            }
                        }
                    }]
                }
            },
            customerMapData: [],
            customerDropdown: [
                { id: 11, value: 'm', text: '제조사', selected: true },
                { id: 12, value: 'f', text: '요금제', selected: false },
                { id: 13, value: 'p', text: 'poi', selected: false },
                { id: 14, value: 'h', text: '거소지', selected: false }
            ]
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    //shouldComponentUpdate(nextProps, nextState) {
    //    return this.state.predictionData !== nextState.predictionData;
    //}

    // api 데이터 호출 -----------------------------------------------------
    fetchData = () => {
        const { customerDropdown } = this.state;
        const index = customerDropdown.findIndex(item => item.selected);
        const selected = customerDropdown[index];

        if (selected.value === '') {
            alert('구분값을 선택 하세요.');
        } else if (selected.value === 'h') {
            this.fetchCustomerMapData(selected.value);
        } else {
            this.fetchCustomerChartData(selected.value);
        }
    };
    fetchCustomerChartData = async (type) => {
        await this.props.onSetCustomerChart({ params: { org_d_code: 'D1', type: type } });
        this.processCustomerChartData(type);
    };
    fetchCustomerMapData = async (type) => {
        await this.props.onSetCustomerMap({ params: { org_d_code: 'D1', type: type } });
        this.processCustomerMapData(type);
    };
    // 고객 레이터 차트 데이터 가공
    processCustomerChartData = (type) => {
        let _orgData = this.props.customerChartData.toJS();
        let _data = [{ name: 'test', data: _orgData.dataValues, pointPlacement: 'on' }];
        let _xAxis = {
            categories: _orgData.category,
            tickmarkPlacement: 'on',
            lineWidth: 0
        };
        this.customerSelectType = type;
        this.setState({ customerChartOption: { ...this.state.customerChartOption, series: _data, xAxis: _xAxis } });

    }
    // 고객 지도 데이터 가공
    processCustomerMapData = (type) => {
        let _orgData = this.props.customerMapData.toJS();

        this.customerSelectType = type;

        // 거소지
        this.setState({ customerMapData: _orgData });

    }

    // selectbox change 이벤트
    customerDropdownChange = (e) => {
        const { customerDropdown } = this.state;
        const id = e.currentTarget.getAttribute('index');
        const index = customerDropdown.findIndex(item => item.id === parseInt(id, 10));
        const selected = customerDropdown[index];
        const nextData = customerDropdown.map(item => {
            return {
                ...item,
                selected: false
            };
        });

        nextData[index] = {
            ...selected,
            selected: true
        };

        this.setState({ customerDropdown: nextData }, () => {
            this.fetchData();
        });
    };

    // util
    addComma = (nStr) => {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    render() {
        console.log('- Call PredictionSalesContainer');

        return (
            <React.Fragment>
                <CustomerMarket
                    customerDropdown={<Dropdown data={this.state.customerDropdown} onChange={this.customerDropdownChange} />}
                    customerChartOption={this.state.customerChartOption}
                    customerMapData={this.state.customerMapData}
                    customerType={this.customerSelectType} />
                {/* customerType={this.customerSelectType}
                customerDropdown={<Dropdown data={this.state.customerDropdown} onChange={this.customerDropdownChange} />}
                customerChartOption={this.state.customerChartOption}
                customerMapData={this.state.customerMapData} */}
            </React.Fragment>
        );
    }
}


CustomerMarketContainer.propTypes = propTypes;
CustomerMarketContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    return {
        customerChartData: state.sales.get('customerChartData'),
        customerMapData: state.sales.get('customerMapData')
    };
};
/* 액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetCustomerChart: (params) => dispatch(setCustomerChart(params)),
    onSetCustomerMap: (params) => dispatch(setCustomerMap(params))
});
CustomerMarketContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerMarketContainer);


export default CustomerMarketContainer;