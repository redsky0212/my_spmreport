import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toJS } from 'immutable';

// MarketWrapper 컨테이너
import MarketWrapper from 'components/body/market/MarketWrapper';
// import { setTopCount, setTrendChart, setPrediction, setCustomerChart, setCustomerMap } from 'store/modules/sales';
// import Dropdown from 'components/common/Dropdown';
// import Checkbox from 'components/common/Checkbox';

// const propTypes = {
//     topCountData: PropTypes.object,
//     trendChartData: PropTypes.object,
//     predictionData: PropTypes.object,
//     customerChartData: PropTypes.object,
//     customerMapData: PropTypes.object
// };

// const defaultProps = {
//     topCountData: {},
//     trendChartData: [],
//     predictionData: {},
//     customerChartData: {},
//     customerMapData: []
// };

class MarketContainer extends Component {

    constructor(props) {
        super(props);
        this.customerSelectType = 'm';
        this.state = {
            trendChartOption: {
                chart: { type: 'spline' },
                credits: { enabled: false },
                colors: ['#ea2839', '#1dc7e8', '#fdd66f', '#317bc7'],
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                yAxis: {
                    title: {
                        text: 'Count'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 1,
                        marker: { symbol: 'circle' }
                    }
                },
                series: [],

            },
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
            dropDown1: [
                { id: 0, value: '', text: '실적구분', selected: false },
                { id: 1, value: '5g', text: '5G', selected: false },
                { id: 2, value: 'else', text: 'else', selected: false },
                { id: 3, value: 'total', text: 'total', selected: true }
            ],
            dropDown2: [
                { id: 4, value: '', text: '기간구분', selected: false },
                { id: 5, value: 'd', text: '일 단위', selected: false },
                { id: 6, value: 'w', text: '주 단위', selected: true },
                { id: 7, value: 'm', text: '월 단위', selected: false }
            ],
            checkbox1: [
                { id: 8, name: 'sales_check', value: '2nd_dev', text: '2nd Device 포함', selected: false },
                { id: 9, name: 'sales_check', value: 'tablet', text: 'Tablet 포함', selected: false },
                { id: 10, name: 'sales_check', value: 'datashare', text: '데이터 쉐어링 포함', selected: false }
            ],
            predictionGridData: [],
            customerDropdown: [
                { id: 11, value: 'm', text: '제조사', selected: true },
                { id: 12, value: 'f', text: '요금제', selected: false },
                { id: 13, value: 'p', text: 'poi', selected: false },
                { id: 14, value: 'h', text: '거소지', selected: false }
            ],
            customerMapData: []
        };

        // this.processTrendChartData = this.processTrendChartData.bind(this);
        // this.processPredictionGridData = this.processPredictionGridData.bind(this);
        // this.processCustomerChartData = this.processCustomerChartData.bind(this);
        // this.processCustomerMapData = this.processCustomerMapData.bind(this);
    }

    componentDidMount() {
        // this.fetchSalesData();
    }
    //shouldComponentUpdate(nextProps, nextState) {
    //    return this.props.predictionData !== nextProps.predictionData;
    //}


    // Trend chart 관련 ---------------------------------------------------
    // Trend chart 호출
    loadTrendChart = () => {
        const { dropDown1, dropDown2, checkbox1 } = this.state;
        const index1 = dropDown1.findIndex(item => item.selected);
        const selected1 = dropDown1[index1];
        const index2 = dropDown2.findIndex(item => item.selected);
        const selected2 = dropDown2[index2];
        const checkIdx = checkbox1.findIndex(item => item.selected);
        const selectedCheck = checkIdx === -1 ? null : checkbox1[checkIdx];

        if (selected1.value === '' || selected2.value === '') {
            alert('실적구분, 기간구분을 선택 하세요.');
        } else {
            this.fetchTrendChartData(selected1.value, selected2.value, selectedCheck ? selectedCheck.value : '');
        }
    };
    // Trend chart 데이터 가공
    processTrendChartData() {
        let _orgData = this.props.trendChartData.toJS();
        let _data = _orgData.map(obj => {
            return {
                name: obj.gubun,
                data: obj.xvalue
            };
        });

        this.setState({ trendChartOption: { ...this.state.trendChartOption, series: _data } });
    }

    // Dropdown1(실적구분) 관련--------------------------------------------
    // selectbox change이벤트
    dropdown1Change = (e) => {
        const { dropDown1 } = this.state;
        const id = e.currentTarget.getAttribute('index');
        const index = dropDown1.findIndex(item => item.id === parseInt(id, 10));
        const selected = dropDown1[index];
        const nextData = dropDown1.map(item => {
            return {
                ...item,
                selected: false
            };
        });

        nextData[index] = {
            ...selected,
            selected: true
        };

        this.setState({ dropDown1: nextData }, () => { this.loadTrendChart(); });
    };
    // Dropdown2(기간구분) 관련--------------------------------------------
    // selectbox change이벤트
    dropdown2Change = (e) => {
        const { dropDown2 } = this.state;
        const id = e.currentTarget.getAttribute('index');
        const index = dropDown2.findIndex(item => item.id === parseInt(id, 10));
        const selected = dropDown2[index];
        const nextData = dropDown2.map(item => {
            return {
                ...item,
                selected: false
            };
        });

        nextData[index] = {
            ...selected,
            selected: true
        };

        this.setState({ dropDown2: nextData }, () => { this.loadTrendChart(); });
    };
    // checkbox1(포함 체크박스) 관련--------------------------------------------
    // checkbox1 change이벤트
    checkbox1Change = (e) => {

        const { checkbox1 } = this.state;
        const id = e.currentTarget.parentElement.parentElement.getAttribute('index');
        const index = checkbox1.findIndex(item => item.id === parseInt(id, 10));
        const selected = checkbox1[index];
        const nextData = checkbox1.map(item => {
            return {
                ...item,
                selected: false
            };
        });

        if (selected.selected === true) {
            e.currentTarget.checked = false;
        } else {
            nextData[index] = {
                ...selected,
                selected: true
            };
        }

        this.setState({ checkbox1: nextData }, () => { this.loadTrendChart(); });
    };
    // 입점매력도 관련------------------------------------------------------
    // 그리드 데이터 가공
    processPredictionGridData() {
        let _orgData = this.props.predictionData.toJS();
        let gridData = _orgData[0];
        const newFeatureArr = [];
        const newPredictionData = [];
        const _minmax = {
            min: 0,
            max: 0,
            absMax: 0
        };

        for (let i = 0; i < 10; i++) {
            let featureItem = JSON.parse(gridData['feature_' + (i + 1)].replace(/\'/gi, '\"'));
            newFeatureArr.push(featureItem);
            let val = parseFloat(featureItem[3]);
            if (val < 0 && _minmax.min > val) {
                _minmax.min = val;
            } else if (val > 0 && _minmax.max < val) {
                _minmax.max = val;
            }
            if (val < 0 && (_minmax.absMax < Math.abs(val))) {
                _minmax.absMax = Math.abs(val);
            } else if (val > 0 && (_minmax.absMax < val)) {
                _minmax.absMax = val;
            }
        }

        newFeatureArr.sort((a, b) => {
            if (a[3] < b[3]) return 1;
            if (a[3] > b[3]) return -1;
            return 0;
        });

        let _data = newFeatureArr.map(obj => {
            return {
                desc: obj[1],
                top: '상위 ' + parseFloat(obj[4]).toFixed(1) + '%',
                cntType: parseFloat(obj[3]) < 0 ? '-' : '+',
                cnt: Math.abs(Math.round(parseFloat(obj[3]) * 10000) / 10000).toFixed(1)
            };
        });

        this.setState({ predictionGridData: _data });
    }
    // 고객/상권 특성 관련--------------------------------------------------
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
            this.loadCustomerChart();
        });
    };
    // Customer chart 호출
    loadCustomerChart = () => {
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
    // 고객 레이터 차트 데이터 가공
    processCustomerChartData(type) {
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
    processCustomerMapData(type) {
        let _orgData = this.props.customerMapData.toJS();

        this.customerSelectType = type;

        // 거소지


        this.setState({ customerMapData: _orgData });

    }

    // api 데이터 호출 -----------------------------------------------------
    fetchSalesData = () => {
        //await Promise.all([
        //this.props.onSetTopCount('D1'),
        //this.props.onSetTrendChart({ params: { org_d_code: 'D1', type: 'w', sale_type: ['handset'], nw_type: 'total' } })
        //]);
        this.props.onSetTopCount('D1');
        this.loadTrendChart();
        this.fetchPredictData('D1');
        this.loadCustomerChart();
    }
    fetchTrendChartData = async (nw_type, type, sale_type) => {
        await this.props.onSetTrendChart({ params: { org_d_code: 'D1', type: type, sale_type: sale_type, nw_type: nw_type } });
        this.processTrendChartData();
    };
    fetchPredictData = async (org_d_code) => {
        await this.props.onSetPrediction(org_d_code);
        this.processPredictionGridData();
    };
    fetchCustomerChartData = async (type) => {
        await this.props.onSetCustomerChart({ params: { org_d_code: 'D1', type: type } });
        this.processCustomerChartData(type);
    };
    fetchCustomerMapData = async (type) => {
        await this.props.onSetCustomerMap({ params: { org_d_code: 'D1', type: type } });
        this.processCustomerMapData(type);
    };

    render() {
        return (
            // <MarketWrapper
            //     topCountData={this.props.topCountData}
            //     trendChartOption={this.state.trendChartOption}
            //     dropdown1={<Dropdown data={this.state.dropDown1} onChange={this.dropdown1Change} />}
            //     dropdown2={<Dropdown data={this.state.dropDown2} onChange={this.dropdown2Change} />}
            //     checkbox1={<Checkbox data={this.state.checkbox1} onChange={this.checkbox1Change} />}
            //     predictionGridData={this.state.predictionGridData}
            //     predictionData={this.props.predictionData}
            //     customerType={this.customerSelectType}
            //     customerDropdown={<Dropdown data={this.state.customerDropdown} onChange={this.customerDropdownChange} />}
            //     customerChartOption={this.state.customerChartOption}
            //     customerMapData={this.state.customerMapData}
            // />
            <MarketWrapper />
        );
    }
}


// MarketContainer.propTypes = propTypes;
// MarketContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
// const mapStateToProps = (state) => {
//     return {
//         topCountData: state.sales.get('topCountData'),
//         trendChartData: state.sales.get('trendChartData'),
//         predictionData: state.sales.get('predictionData'),
//         customerChartData: state.sales.get('customerChartData'),
//         customerMapData: state.sales.get('customerMapData')
//     };
// };
// /* 액션 생성자를 사용하여 액션을 생성하고,
//     해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
// */
// const mapDispatchToProps = (dispatch) => ({
//     onSetTopCount: (org_d_code) => dispatch(setTopCount(org_d_code)),
//     onSetTrendChart: (params) => dispatch(setTrendChart(params)),
//     onSetPrediction: (org_d_code) => dispatch(setPrediction(org_d_code)),
//     onSetCustomerChart: (params) => dispatch(setCustomerChart(params)),
//     onSetCustomerMap: (params) => dispatch(setCustomerMap(params))
// });
// SalesContainer = connect(mapStateToProps, mapDispatchToProps)(SalesContainer);


export default MarketContainer;