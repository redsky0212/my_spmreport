import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toJS } from 'immutable';

// action
import { setPrediction } from 'store/modules/sales';
// component
import PredictionSales from 'components/body/sales/PredictionSales';

const propTypes = {
    predictionData: PropTypes.object
};

const defaultProps = {
    predictionData: {}
};

class PredictionsSalesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            predictionGridData: [],
            predictionChartData: [],
            pred_qty: 0
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    //shouldComponentUpdate(nextProps, nextState) {
    //    return this.state.predictionData !== nextState.predictionData;
    //}

    // api 데이터 호출 -----------------------------------------------------
    fetchData = async () => {
        await this.props.onSetPrediction('D1');
        const _gridData = this.processPredictionGridData();
        //const { areaData, medianIdx, lineIdx } = this.setAreaData();
        const _chartData = this.setAreaData();
        const _pred_qty = this.addComma(this.props.predictionData.toJS().salesPredictionData[0]['pred_qty'] || 0);
        this.setState({ 
            predictionGridData: _gridData,
            predictionChartData: _chartData,
            pred_qty: _pred_qty
        });
    };

    // 입점매력도 관련------------------------------------------------------
    // 그리드 데이터 가공
    processPredictionGridData = () => {
        let _orgData = this.props.predictionData.toJS();
        
        let gridData = _orgData.salesPredictionData[0];
        const newFeatureArr = [];
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

        return _data;
        
    }
    // chart 데이터 가공
    setAreaData = () => {
        let data = [];
        let tempItem = null;
        let medianIdx = null;
        let lineIdx = null;
        
        const orgData = this.props.predictionData.toJS();
        let pred_qty = orgData.salesPredictionData[0]['pred_qty'] || 0;
        let medianVal = 0;//parseFloat(this.props.data.median[0].median_val || 0);
        let _data = orgData.graph || [];
        let len = _data.length || 0;

        for (let i = 0; i < len; i++) {
            data.push([_data[i].interval_col, _data[i].tot_sales]);
            tempItem = _data[i].interval_col.split('~');

            if (medianVal >= parseFloat(tempItem[0]) && medianVal <= parseFloat(tempItem[1])) {
                medianIdx = i;
            }
            if (pred_qty >= parseFloat(tempItem[0]) && pred_qty <= parseFloat(tempItem[1])) {
                lineIdx = i;
            }

        }

        return { areaData: data, medianIdx: medianVal, lineIdx: lineIdx };

    }

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
                <PredictionSales 
                    predictionGridData={this.state.predictionGridData}
                    predictionChartData={this.state.predictionChartData}
                    pred_qty={this.state.pred_qty}
                     />
            </React.Fragment>
        );
    }
}


PredictionsSalesContainer.propTypes = propTypes;
PredictionsSalesContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    return {
        predictionData: state.sales.get('predictionData')
    };
};
/* 액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetPrediction: (org_d_code) => dispatch(setPrediction(org_d_code))
});
PredictionsSalesContainer = connect(mapStateToProps, mapDispatchToProps)(PredictionsSalesContainer);


export default PredictionsSalesContainer;