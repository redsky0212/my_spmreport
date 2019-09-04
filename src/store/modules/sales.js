import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as sales from 'services/sales';

// 초기 sales 상태값를 정의합니다
const initialState = Map({
    topCountData: Map({}),
    trendChartData:List([]),
    predictionData:Map({}),
    customerChartData:Map([]),
    customerMapData: List([])
});

// 액션 타입
const SET_TOP_COUNT = 'sales/SET_TOP_COUNT';
const SET_TREND_CHART = 'sales/SET_TREND_CHART';
const SET_PREDICTION = 'sales/SET_PREDICTION';
const SET_CUSTOMER_CHART = 'sales/SET_CUSTOMER_CHART';
const SET_CUSTOMER_MAP = 'sales/SET_CUSTOMER_MAP';

// 액션 생성자(두번째 인자는 promise를 반환하는 함수)
export const setTopCount = createAction(SET_TOP_COUNT, sales.getTopCount); // { org_d_code }
export const setTrendChart = createAction(SET_TREND_CHART, sales.getTrendChart);    // {org_d_code, type, sale_type, nw_type }
export const setPrediction = createAction(SET_PREDICTION, sales.getSalesprediction); // { org_d_code }
export const setCustomerChart = createAction(SET_CUSTOMER_CHART, sales.getSalesCustomer);    // {org_d_code, type }
export const setCustomerMap = createAction(SET_CUSTOMER_MAP, sales.getSalesCustomer);    // {org_d_code, type } 

// 리듀서
export default handleActions({
    ...pender({
        type: SET_TOP_COUNT, // type 이 주어지면, 이 type 에 접미사를 붙인 액션핸들러들이 담긴 객체를 생성합니다.
        onSuccess: (state, action) => { // 성공했을때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
            return state.set('topCountData', fromJS(action.payload.data.topCountData));
        },
        // 함수가 생략됐을때 기본 값으론 (state, action) => state 가 설정됩니다 (state 를 그대로 반환한다는 것이죠)
        /*
        요청중 / 실패 했을 때 추가적으로 해야 할 작업이 있다면 이렇게 onPending 과 onFailure 를 추가해주면됩니다.
        onPending: (state, action) => state,
        onFailure: (state, action) => state
        */
    }),
    ...pender({
        type: SET_TREND_CHART, 
        onSuccess: (state, action) => {
            return state.set('trendChartData', fromJS(action.payload.data.trendGraphData));
        }
    }),
    ...pender({
        type: SET_PREDICTION,
        onSuccess: (state, action) => {
            return state.set('predictionData', fromJS(action.payload.data.salesPredictionData));
        }
    }),
    ...pender({
        type: SET_CUSTOMER_CHART,
        onSuccess: (state, action) => {
            return state.set('customerChartData', fromJS(action.payload.data.customerGraphData));
        }
    }),
    ...pender({
        type: SET_CUSTOMER_MAP,
        onSuccess: (state, action) => {
            return state.set('customerMapData', fromJS(action.payload.data.customerGraphData));
        }
    }),


    // [SET_TOP_COUNT]: (state, action) => {
    //     const topCountData = state.get('topCountData');

    //     return state.set('topCountData', topCountData.update(
    //         action.payload.org_d_code,
    //         (counter) => counter.set('color', action.payload.color))
    //     );
    // }
    
}, initialState);