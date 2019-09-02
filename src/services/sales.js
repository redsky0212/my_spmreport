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
    //return http.get(`/api/sales/getTopCount?org_d_code=${org_d_code}`);
    return new Promise(function (resolve, reject) {
        // getTopCount response data
        resolve({"data":{"topCountData":{"current_handset_cnt":50,"current_handset_rate":"-26.47","current_5g_cnt":23,"current_5g_rate":"15.0","current_wire_cnt":0,"current_wire_rate":"-","current_visit_cnt":354,"current_visit_rate":"-30.59"}},"status":200,"statusText":"OK","headers":{"date":"Fri, 30 Aug 2019 07:26:35 GMT","etag":"W/\"db-8dFK10QOKyk0BNOaOhW7CtFw73I\"","x-powered-by":"Express","content-length":"219","vary":"Accept-Encoding","content-type":"application/json; charset=utf-8"},"config":{"url":"/api/sales/getTopCount?org_d_code=D1","method":"get","headers":{"Accept":"application/json, text/plain, */* "},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF - TOKEN","xsrfHeaderName":"X - XSRF - TOKEN","maxContentLength":-1},"request":{}});
    });
};

const getTrendChart = (param) => {
    // {"trendGraphData":[{"org_d_code":"D1","gubun":"chg","cnt1":2,"cnt2":9,"cnt3":3,"cnt4":3,"cnt5":6,"cnt6":7,"cnt7":10,"cnt8":2,"cnt9":1,"cnt10":10,"cnt11":9,"cnt12":7,"xvalue":[2,9,3,3,6,7,10,2,1,10,9,7]},{"org_d_code":"D1","gubun":"mnp","cnt1":1,"cnt2":1,"cnt3":3,"cnt4":1,"cnt5":1,"cnt6":3,"cnt7":1,"cnt8":0,"cnt9":1,"cnt10":1,"cnt11":2,"cnt12":3,"xvalue":[1,1,3,1,1,3,1,0,1,1,2,3]},{"org_d_code":"D1","gubun":"new","cnt1":1,"cnt2":3,"cnt3":3,"cnt4":1,"cnt5":2,"cnt6":2,"cnt7":4,"cnt8":3,"cnt9":3,"cnt10":2,"cnt11":5,"cnt12":3,"xvalue":[1,3,3,1,2,2,4,3,3,2,5,3]}]}
    //return http.get('/api/sales/getTrendGraph', param);
    return new Promise(function (resolve, reject) {
        // getTopCount response data
        resolve({"data":{"trendGraphData":[{"org_d_code":"D1","gubun":"chg","cnt1":2,"cnt2":9,"cnt3":3,"cnt4":3,"cnt5":6,"cnt6":7,"cnt7":10,"cnt8":2,"cnt9":1,"cnt10":10,"cnt11":9,"cnt12":7,"xvalue":[2,9,3,3,6,7,10,2,1,10,9,7]},{"org_d_code":"D1","gubun":"mnp","cnt1":1,"cnt2":1,"cnt3":3,"cnt4":1,"cnt5":1,"cnt6":3,"cnt7":1,"cnt8":0,"cnt9":1,"cnt10":1,"cnt11":2,"cnt12":3,"xvalue":[1,1,3,1,1,3,1,0,1,1,2,3]},{"org_d_code":"D1","gubun":"new","cnt1":1,"cnt2":3,"cnt3":3,"cnt4":1,"cnt5":2,"cnt6":2,"cnt7":4,"cnt8":3,"cnt9":3,"cnt10":2,"cnt11":5,"cnt12":3,"xvalue":[1,3,3,1,2,2,4,3,3,2,5,3]}]}});
    });
};


export {
    getTopCount,
    getTrendChart
};