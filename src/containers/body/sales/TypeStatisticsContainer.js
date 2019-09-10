import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toJS } from 'immutable';

// action
import { setTypeChart } from 'store/modules/sales';
// component
import TypeStatisticsComponent from 'components/body/sales/TypeStatistics';
import Dropdown from 'components/common/Dropdown';

const propTypes = {
    typeStatisticsData: PropTypes.object
};

const defaultProps = {
    typeStatisticsData: {}
};

class TypeStatisticsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdown1: [
                { id: 0, value: '', text: '실적구분', selected: false },
                { id: 1, value: '5g', text: '5G', selected: false },
                { id: 2, value: 'else', text: 'else', selected: false },
                { id: 3, value: 'total', text: 'total', selected: true }
            ],
            dropdown2: [
                { id: 0, value: '', text: '기간구분', selected: false },
                { id: 1, value: 'd', text: '일 단위', selected: false },
                { id: 2, value: 'w', text: '주 단위', selected: true },
                { id: 3, value: 'm', text: '월 단위', selected: false }
            ],
            typeChartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    margin: [0, 0, 0, 0],
                    height: '200px'
                },
                title: {
                    text: '',
                    style: { 'fontSize': '13px' }
                },
                credits: { enabled: false },
                colors: ['#f4463e', '#f7941d', '#52bbce', '#317bc7'],
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        startAngle: 0,
                        endAngle: 360,

                        size: '80%'
                    }
                },
                series: [
                ]
            },
            typeChartOption: {
                moptions: {},
                aoptions: {},
                foptions: {}
            },
            typeChartTitle : {
                text: '제조사별 통계',
                align: 'center',
                verticalAlign: 'top',
                y: 15,
            },
            typeChartSeries : {
                type: 'pie',
                name: '제조사별 통계',
                innerSize: '50%',
                dataLabels: {
                    enabled: false
                },
                data: []
            }
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    //shouldComponentUpdate(nextProps, nextState) {
    //    return this.state.typeStatisticsData !== nextState.typeStatisticsData;
    //}

    // api 데이터 호출 -----------------------------------------------------
    fetchData = () => {
        this.loadTypeStatistics();
    }

    loadTypeStatistics = () => {
        const { dropdown1, dropdown2 } = this.state;
        const index1 = dropdown1.findIndex(item => item.selected);
        const selected1 = dropdown1[index1];
        const index2 = dropdown2.findIndex(item => item.selected);
        const selected2 = dropdown2[index2];

        if (selected1.value === '' || selected2.value === '') {
            alert('실적구분, 기간구분을 선택 하세요.');
        } else {
            this.fetchTypeStatisticsData(selected1.value, selected2.value);
        }
    };
    fetchTypeStatisticsData = async (nw_type, type) => {
        await this.props.onSetTypeStatistics({ params: { org_d_code: 'D1', type: type, nw_type: nw_type } });
        this.processTypeStatisticsData();
    };
    // Type chart 데이터 가공
    processTypeStatisticsData = () => {
        let _orgData = this.props.typeStatisticsData.toJS();
        let { mfact, age, fee } = _orgData;

        let moptions = {
            ...this.state.typeChartOptions,
            title: {
                ...this.state.typeChartTitle,
                text: '제조사별 통계',
                style: { "fontSize": "13px" }
            },
            series: {
                ...this.state.typeChartSeries,
                name: '제조사별 통계',
                data: mfact
            },
        };

        let aoptions = {
            ...this.state.typeChartOptions,
            title: {
                ...this.state.typeChartTitle,
                text: '연령대별 통계',
                style: { "fontSize": "13px" }
            },
            series: {
                ...this.state.typeChartSeries,
                name: '연령대별 통계',
                data: age
            },
        };

        let foptions = {
            ...this.state.typeChartOptions,
            title: {
                ...this.state.typeChartTitle,
                text: '요금제별 통계',
                style: { "fontSize": "13px" }
            },
            series: {
                ...this.state.typeChartSeries,
                name: '요금제별 통계',
                data: fee
            },
        };

        let _option = {};
        _option.moptions = moptions;
        _option.aoptions = aoptions;
        _option.foptions = foptions;

        this.setState({ typeChartOption: _option });
       

    }

    // Dropdown1(실적구분) 관련--------------------------------------------
    // selectbox change이벤트
    dropdown1Change = (e) => {
        const { dropdown1 } = this.state;
        const id = e.currentTarget.getAttribute('index');
        const index = dropdown1.findIndex(item => item.id === parseInt(id, 10));
        const selected = dropdown1[index];
        const nextData = dropdown1.map(item => {
            return {
                ...item,
                selected: false
            };
        });

        nextData[index] = {
            ...selected,
            selected: true
        };

        this.setState({ dropdown1: nextData }, () => { this.loadTypeStatistics(); });
    };
    // Dropdown2(기간구분) 관련--------------------------------------------
    // selectbox change이벤트
    dropdown2Change = (e) => {
        const { dropdown2 } = this.state;
        const id = e.currentTarget.getAttribute('index');
        const index = dropdown2.findIndex(item => item.id === parseInt(id, 10));
        const selected = dropdown2[index];
        const nextData = dropdown2.map(item => {
            return {
                ...item,
                selected: false
            };
        });

        nextData[index] = {
            ...selected,
            selected: true
        };

        this.setState({ dropdown2: nextData }, () => { this.loadTypeStatistics(); });
    };
   
    render() {
        console.log('- Call TypeStatisticsContainer');
       
        return (
            <React.Fragment>
                <TypeStatisticsComponent 
                    dropdown1={<Dropdown data={this.state.dropdown1} styletype={2} onChange={this.dropdown1Change} />}
                    dropdown2={<Dropdown data={this.state.dropdown2} styletype={2} onChange={this.dropdown2Change} />}
                    typeChartOption={this.state.typeChartOption} />
            </React.Fragment>
        );
    }
}


TypeStatisticsContainer.propTypes = propTypes;
TypeStatisticsContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    return {
        typeStatisticsData: state.sales.get('typeStatisticsData')
    };
};
/* 액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetTypeStatistics: (params) => dispatch(setTypeChart(params))
});
TypeStatisticsContainer = connect(mapStateToProps, mapDispatchToProps)(TypeStatisticsContainer);


export default TypeStatisticsContainer;