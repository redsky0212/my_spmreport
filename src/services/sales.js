// 임시 참조 code
//return http.get(`${config.baseUrl}api/sales/getTopCount?org_d_code=${org_d_code}`);
//return http({
//   method: 'GET',
//   url: `/api/sales/getTopCount?org_d_code=${org_d_code}`
//});
//return new Promise(function (resolve, reject) {
    // getTopCount response data
//    resolve({"data":{"topCountData":{"current_handset_cnt":50,"current_handset_rate":"-26.47","current_5g_cnt":23,"current_5g_rate":"15.0","current_wire_cnt":0,"current_wire_rate":"-","current_visit_cnt":354,"current_visit_rate":"-30.59"}},"status":200,"statusText":"OK","headers":{"date":"Fri, 30 Aug 2019 07:26:35 GMT","etag":"W/\"db-8dFK10QOKyk0BNOaOhW7CtFw73I\"","x-powered-by":"Express","content-length":"219","vary":"Accept-Encoding","content-type":"application/json; charset=utf-8"},"config":{"url":"/api/sales/getTopCount?org_d_code=D1","method":"get","headers":{"Accept":"application/json, text/plain, */* "},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF - TOKEN","xsrfHeaderName":"X - XSRF - TOKEN","maxContentLength":-1},"request":{}});
//});

import http from './http';

const config = {
    baseUrl: 'http://localhost:4000/'
}

const getTopCount = (org_d_code) => {
    return http.get(`/api/sales/getTopCount?org_d_code=${org_d_code}`);
    //return new Promise(function (resolve, reject) {
        // getTopCount response data
    //    resolve({"data":{"topCountData":{"current_handset_cnt":50,"current_handset_rate":"-26.47","current_5g_cnt":23,"current_5g_rate":"15.0","current_wire_cnt":0,"current_wire_rate":"-","current_visit_cnt":354,"current_visit_rate":"-30.59"}},"status":200,"statusText":"OK","headers":{"date":"Fri, 30 Aug 2019 07:26:35 GMT","etag":"W/\"db-8dFK10QOKyk0BNOaOhW7CtFw73I\"","x-powered-by":"Express","content-length":"219","vary":"Accept-Encoding","content-type":"application/json; charset=utf-8"},"config":{"url":"/api/sales/getTopCount?org_d_code=D1","method":"get","headers":{"Accept":"application/json, text/plain, */* "},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF - TOKEN","xsrfHeaderName":"X - XSRF - TOKEN","maxContentLength":-1},"request":{}});
    //});
};

const getTrendChart = (param) => {
    return http.get('/api/sales/getTrendGraph', param);
    //return new Promise(function (resolve, reject) {
        // getTopCount response data
    //    resolve({"data":{"trendGraphData":[{"org_d_code":"D1","gubun":"chg","cnt1":2,"cnt2":9,"cnt3":3,"cnt4":3,"cnt5":6,"cnt6":7,"cnt7":10,"cnt8":2,"cnt9":1,"cnt10":10,"cnt11":9,"cnt12":7,"xvalue":[2,9,3,3,6,7,10,2,1,10,9,7]},{"org_d_code":"D1","gubun":"mnp","cnt1":1,"cnt2":1,"cnt3":3,"cnt4":1,"cnt5":1,"cnt6":3,"cnt7":1,"cnt8":0,"cnt9":1,"cnt10":1,"cnt11":2,"cnt12":3,"xvalue":[1,1,3,1,1,3,1,0,1,1,2,3]},{"org_d_code":"D1","gubun":"new","cnt1":1,"cnt2":3,"cnt3":3,"cnt4":1,"cnt5":2,"cnt6":2,"cnt7":4,"cnt8":3,"cnt9":3,"cnt10":2,"cnt11":5,"cnt12":3,"xvalue":[1,3,3,1,2,2,4,3,3,2,5,3]}]}});
    //});
};

const getSalesprediction = (org_d_code) => {
    return http.get(`/api/sales/getSalesPrediction?org_d_code=${org_d_code}`);
    //return new Promise(function (resolve, reject) {
        // getSalesprediction response data
    //    resolve({"data":{ "salesPredictionData": [{ "org_d_code": "D1", "pred_qty": 58, "feature_1": "['2', '100m~1000m 이내 대리점 평균 판매량', 65.333336, 10.40034673976939, '14.9%']", "feature_2": "['193', '피부과까지의 거리', 0.05447155, 7.763093987853542, '12.2%']", "feature_3": "['58', '100m~1000m이내 직장인구 평균 통화량', 2024.463, -6.17673454835621, '4.5%']", "feature_4": "['158', '유치원까지의 거리', 0.73638767, 3.774790145617895, '95.1%']", "feature_5": "['169', '최인접 KT매장까지의 거리', 0.4815607, -3.7509667722185536, '79.0%']", "feature_6": "['34', '100m~1000m이내 거주인구 평균 통화량', 55.0, -3.6410288315375743, '14.9%']", "feature_7": "['145', '세계음식점까지의 거리', 0.102922164, 3.281203197483442, '27.6%']", "feature_8": "['200', '화장품샵까지의 거리', 0.13612497, -2.8487389846208844, '72.7%']", "feature_9": "['168', '최인접 LG매장까지의 거리', 0.31688714, -2.6759133681667433, '61.1%']", "feature_10": "['96', 'MVNO로 번호이동한 직장인구 수', 13173.0, -2.6180945980868513, '0.8%']", "feature_11": "['11', '100m~1000m 이내 판매점 평균 판매량', 9.173913, 2.6114408931218547, '76.4%']", "feature_12": "['85', '100m~700m 이내 대리점 총 판매량', 435.0, -2.1637091819940437, '14.8%']", "feature_13": "['152', '안경점까지의 거리', 0.46952733, -2.109632429306608, '94.5%']", "feature_14": "['127', '룸살롱까지의 거리', 0.018452004, 2.0201670633768622, '9.1%']", "feature_15": "['184', '타사로 번호이동할 스코어가 0.5~0.75인 직장인구 수', 5677.0, -1.5328203518703294, '2.2%']" }] }});
    //});
};

const getSalesCustomer = (param) => {
    return http.get('/api/sales/getCustomerGraph', param);
    //return new Promise(function (resolve, reject) {
        // radar response data
    //    resolve({"data":{ "customerGraphData":{"dataValues":["13","4","53","34","9"],"category":["a","b","c","d","e"]}  }});
    //});
};

export {
    getTopCount,
    getTrendChart,
    getSalesprediction,
    getSalesCustomer
};