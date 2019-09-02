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
};

const getTrendChart = (param) => {
    return http.get('/api/sales/getTrendGraph', param);
};


export {
    getTopCount,
    getTrendChart
};