import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// SalesWrapper 컨테이너
import SalesWrapper from 'components/body/SalesWrapper';
import { setTopCount } from 'store/modules/sales';

const propTypes = {
    topCountData: PropTypes.object
};

const defaultProps = {
    topCountData: {}
};

class SalesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topCnt : [
                {
                    cnt: this.props.topCountData.current_handset_cnt,
                    rate: this.props.topCountData.current_handset_rate,
                    title: '당월무선실적',
                    index: 1
                },
                {
                    cnt: this.props.topCountData.current_5g_cnt,
                    rate: this.props.topCountData.current_5g_rate,
                    title: '당월5G실적',
                    index: 2
                },
                {
                    cnt: this.props.topCountData.current_wire_cnt,
                    rate: this.props.topCountData.current_wire_rate,
                    title: '당월유선실적',
                    index: 3
                },
                {
                    cnt: this.props.topCountData.current_visit_cnt,
                    rate: this.props.topCountData.current_visit_rate,
                    title: '내방대비 판매비율',
                    index: 4
                }
            ]
        };
    }

    componentDidMount() {
        this.props.onSetTopCount('D1');
    }

    render() {
        return (
            <SalesWrapper 
                topCountData={this.props.topCountData} 
                topCnt={this.state.topCnt}
            />
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
    onSetTopCount: (org_d_code) => dispatch(setTopCount(org_d_code))
});

SalesContainer = connect(mapStateToProps, mapDispatchToProps)(SalesContainer);

export default SalesContainer;