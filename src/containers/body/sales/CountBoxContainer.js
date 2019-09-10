import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toJS} from 'immutable';

// action
import { setTopCount } from 'store/modules/sales';
// component
import CountGroupBox from 'components/body/sales/CountGroupBox';

const propTypes = {
    topCountData: PropTypes.object
};

const defaultProps = {
    
};

class CountBoxContainer extends Component {

    constructor(props) {
        super(props);
          
    }

    componentDidMount() {
        this.fetchData();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.topCountData !== nextProps.topCountData;
    }
    
    // api 데이터 호출 -----------------------------------------------------
    fetchData = () => {
        //await Promise.all([
            //this.props.onSetTopCount('D1'),
            //this.props.onSetTrendChart({ params: { org_d_code: 'D1', type: 'w', sale_type: ['handset'], nw_type: 'total' } })
        //]);
        this.props.onSetTopCount('D1');
    }

    render() {
        console.log('- Call CountBoxContainer');
        const topCountData = this.props.topCountData;
        return (
            <React.Fragment>
                <CountGroupBox 
                    cnt={topCountData.get('current_handset_cnt') || '-'}
                    rate={topCountData.get('current_handset_rate')}
                    index={1}
                    desc={'당월무선실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_5g_cnt') || '-'}
                    rate = { topCountData.get('current_5g_rate')}
                    index={2}
                    desc={'당월5G실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_wire_cnt') || '-'}
                    rate={topCountData.get('current_wire_rate')}
                    index={3}
                    desc={'당월유선실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_visit_cnt') || '-'}
                    rate={topCountData.get('current_visit_rate')}
                    index={4}
                    desc={'내방대비 판매비율'}
                />
            </React.Fragment>
        );
    }
}


CountBoxContainer.propTypes = propTypes;
CountBoxContainer.defaultProps = defaultProps;


// store안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => {
    return {
        topCountData: state.sales.get('topCountData')
    };
};
/* 액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    onSetTopCount: (org_d_code) => dispatch(setTopCount(org_d_code))
});
CountBoxContainer = connect(mapStateToProps, mapDispatchToProps)(CountBoxContainer);


export default CountBoxContainer;