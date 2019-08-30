import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// SalesWrapper 컨테이너
import SalesWrapper from 'components/body/SalesWrapper';
import { setTopCount } from 'store/modules/sales';

const propTypes = {
    
};

const defaultProps = {
    
};

class SalesContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // getTopCount response data
        let obj = {"data":{"topCountData":{"current_handset_cnt":50,"current_handset_rate":"-26.47","current_5g_cnt":23,"current_5g_rate":"15.0","current_wire_cnt":0,"current_wire_rate":"-","current_visit_cnt":354,"current_visit_rate":"-30.59"}},"status":200,"statusText":"OK","headers":{"date":"Fri, 30 Aug 2019 07:26:35 GMT","etag":"W/\"db-8dFK10QOKyk0BNOaOhW7CtFw73I\"","x-powered-by":"Express","content-length":"219","vary":"Accept-Encoding","content-type":"application/json; charset=utf-8"},"config":{"url":"/api/sales/getTopCount?org_d_code=D1","method":"get","headers":{"Accept":"application/json, text/plain, */* "},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF - TOKEN","xsrfHeaderName":"X - XSRF - TOKEN","maxContentLength":-1},"request":{}};
        
        this.props.onSetTopCount('D1');
      
    }

    render() {
        return (
            <SalesWrapper topCountData={this.props.topCountData} />
        );
    }
}

SalesContainer.propTypes = propTypes;
SalesContainer.defaultProps = defaultProps;




// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    
    return {
        topCountData: state.sales.get('topCountData')
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetTopCount: (org_d_code) => {
        console.log(setTopCount);
        dispatch(setTopCount(org_d_code));
    }
    
});

SalesContainer = connect(mapStateToProps, mapDispatchToProps)(SalesContainer);



export default SalesContainer;