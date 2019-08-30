import http from './http';

const config = {
    baseUrl: 'http://localhost:4000/'
}

export function getTopCount(org_d_code) {
    //return http.get(`${config.baseUrl}api/sales/getTopCount?org_d_code=${org_d_code}`);
    return http({
        method: 'GET',
        url: `/api/sales/getTopCount?org_d_code=${org_d_code}`
    });
}