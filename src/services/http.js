import axios from 'axios';

const http = axios.create({
    //withCredentials: true
})

const onUnauthrorized = () => {
    // 인증 응답 실패시 처리
}

//요청 인터셉터 필요에 따라 사용
http.interceptors.request.use(function (config) {
    // ...
    return config
}, function (error) {
    // ...
    return Promise.reject(error)
});

//응답 인터셉터 필요에 따라 사용
http.interceptors.response.use(function (response) {
    // ...
    return response
}, function (error) {
    if (error.response.status == 401) {
        onUnauthrorized();
    }
    return Promise.reject(error)
})

export default http;