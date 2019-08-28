import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class NaviContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab_area">
                <div className="tab_wrap">
                    <div className="tabmenu" id="tabmenu_type">
                        <a href="#output01">판매실적</a>
                        <a href="#output02">상권분석</a>
                        <a href="#output03">업무처리</a>
                        <a href="#output04">단골고객</a>
                    </div>
                </div>
            </div>
        );
    }
}

NaviContainer.propTypes = propTypes;
NaviContainer.defaultProps = defaultProps;

export default NaviContainer;