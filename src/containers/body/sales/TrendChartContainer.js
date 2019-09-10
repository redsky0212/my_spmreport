import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toJS} from 'immutable';

// action
import { setTrendChart } from 'store/modules/sales';
// component
import TrendChart from 'components/body/sales/TrendChart';
import Dropdown from 'components/common/Dropdown';
import Checkbox from 'components/common/Checkbox';

const propTypes = {
    trendChartData: PropTypes.object
};

const defaultProps = {
    trendChartData: {}
};

class TrendChartContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDown1: [
                { id:0, value: '', text: '실적구분', selected: false },
                { id:1, value: '5g', text: '5G', selected: false },
                { id:2, value: 'else', text: 'else', selected: false },
                { id:3, value: 'total', text: 'total', selected: true }
            ],
            dropDown2: [
                { id: 0, value: '', text: '기간구분', selected: false },
                { id: 1, value: 'd', text: '일 단위', selected: false },
                { id: 2, value: 'w', text: '주 단위', selected: true },
                { id: 3, value: 'm', text: '월 단위', selected: false }
            ],
            checkbox1: [
                { id: 0, name: 'sales_check', value: '2nd_dev', text: '2nd Device 포함', selected: false },
                { id: 1, name: 'sales_check', value: 'tablet', text: 'Tablet 포함', selected: false },
                { id: 2, name: 'sales_check', value: 'datashare', text: '데이터 쉐어링 포함', selected: false }
            ],
            trendChartOption: {
                chart: { type: 'spline' },
                credits: { enabled: false },
                colors: ['#ea2839','#1dc7e8','#fdd66f','#317bc7'],
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

            }
        }
    }

    componentDidMount() {
        this.fetchData();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.trendChartOption !== nextState.trendChartOption;
    }
    
    // api 데이터 호출 -----------------------------------------------------
    fetchData = () => {
        //await Promise.all([
            //this.props.onSetTopCount('D1'),
            //this.props.onSetTrendChart({ params: { org_d_code: 'D1', type: 'w', sale_type: ['handset'], nw_type: 'total' } })
        //]);

        this.loadTrendChart();
    }

    loadTrendChart = () => {
        const { dropDown1, dropDown2, checkbox1 } = this.state;
        const index1 = dropDown1.findIndex(item => item.selected);
        const selected1 = dropDown1[index1];
        const index2 = dropDown2.findIndex(item => item.selected);
        const selected2 = dropDown2[index2];
        const checkIdx = checkbox1.findIndex(item => item.selected);
        const selectedCheck = checkIdx === -1? null:checkbox1[checkIdx];
        
        if (selected1.value === '' || selected2.value === '') {
            alert('실적구분, 기간구분을 선택 하세요.');
        }else{
            this.fetchTrendChartData(selected1.value, selected2.value, selectedCheck?selectedCheck.value:'');
        }
    };
    fetchTrendChartData = async (nw_type, type, sale_type) => {
        await this.props.onSetTrendChart({ params: { org_d_code: 'D1', type: type, sale_type: sale_type, nw_type: nw_type } });
        this.processTrendChartData();
    };
    // Trend chart 데이터 가공
    processTrendChartData = () => {
        let _orgData = this.props.trendChartData.toJS();
        let _data = _orgData.map(obj => {
            return {
                name: obj.gubun,
                data: obj.xvalue
            };
        });
        this.setState({ trendChartOption: { ...this.state.trendChartOption, series:_data}});
       
    }

    // Dropdown1(실적구분) 관련--------------------------------------------
    // selectbox change이벤트
    dropdown1Change = (e) => {
        const { dropDown1 } = this.state;
        const id = e.currentTarget.getAttribute('index');
        const index = dropDown1.findIndex(item => item.id === parseInt(id,10));
        const selected = dropDown1[index];
        const nextData = dropDown1.map(item=>{
            return {
                ...item,
                selected:false
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
        
        if (selected.selected === true ){
            e.currentTarget.checked = false;
        }else{
            nextData[index] = {
                ...selected,
                selected: true
            };
        }

        this.setState({ checkbox1: nextData }, () => { this.loadTrendChart(); });
    };

    render() {
        console.log('- Call TrendChartContainer');
        return (
            <React.Fragment>
                <TrendChart 
                    trendChartOption={this.state.trendChartOption}
                    dropdown1={<Dropdown data={this.state.dropDown1} onChange={this.dropdown1Change} />}
                    dropdown2={<Dropdown data={this.state.dropDown2} onChange={this.dropdown2Change} />}
                    checkbox1={<Checkbox data={this.state.checkbox1} onChange={this.checkbox1Change} />}
                />
            </React.Fragment>
        );
    }
}


TrendChartContainer.propTypes = propTypes;
TrendChartContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    return {
        trendChartData: state.sales.get('trendChartData')
    };
};
/* 액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetTrendChart: (params) => dispatch(setTrendChart(params))
});
TrendChartContainer = connect(mapStateToProps, mapDispatchToProps)(TrendChartContainer);


export default TrendChartContainer;