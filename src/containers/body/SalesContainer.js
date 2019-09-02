import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toJS} from 'immutable';

// SalesWrapper 컨테이너
import SalesWrapper from 'components/body/sales/SalesWrapper';
import { setTopCount, setTrendChart } from 'store/modules/sales';

const propTypes = {
    topCountData: PropTypes.object,
    trendChartData: PropTypes.object
};

const defaultProps = {
    topCountData: {},
    trendChartData: []
};

class SalesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
        };
        
        this.processTrendChartData = this.processTrendChartData.bind(this);
    }

    componentDidMount() {
        this.fetchSalesData();
    }

    // Trend chart 데이터 가공
    processTrendChartData(){
        let _orgData = this.props.trendChartData.toJS();
        let _data = _orgData.map(obj => {
            return {
                name: obj.gubun,
                data: obj.xvalue
            };
        });
        
        this.setState({ trendChartOption: { ...this.state.trendChartOption, series:_data}});
    }

    fetchSalesData = async () => {
        await Promise.all([
            this.props.onSetTopCount('D1'),
            this.props.onSetTrendChart({ params: { org_d_code: 'D1', type: 'w', sale_type: ['handset'], nw_type: 'total' } })
        ]);
        this.processTrendChartData();
    }

    render() {
        return (
            <SalesWrapper 
                topCountData={this.props.topCountData}
                trendChartOption={this.state.trendChartOption}
            />
        );
    }
}


SalesContainer.propTypes = propTypes;
SalesContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    return {
        topCountData: state.sales.get('topCountData'),
        trendChartData: state.sales.get('trendChartData')
    };
};
/* 액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetTopCount: (org_d_code) => dispatch(setTopCount(org_d_code)),
    onSetTrendChart: (params) => dispatch(setTrendChart(params))
});
SalesContainer = connect(mapStateToProps, mapDispatchToProps)(SalesContainer);


export default SalesContainer;