import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class SearchContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const storeInput = {width: '300px'};
        const calendarInput = {width:'150px'};

        return (
            <div className="search_area">
                <div className="search_box">
                    <input type="text" placeholder="매장명을 입력하세요." style={storeInput} />&nbsp;&nbsp;
                    {/* <input type="text" id="daily_start_date" placeholder="2019.07.10" className="calend mr10" autocomplete="off" style={calendarInput} /> */}
                    <input type="text" id="daily_start_date" placeholder="2019.07.10" className="calend mr10" style={calendarInput} />
                    <span>
                        <button className="com_gray mr3">경쟁매장비교</button>
                    </span>
                    <ul className="right">
                        <li>
                            <a href="#" className="r_tit">합정미니대리점 서교점 매장컨설팅리포트</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

SearchContainer.propTypes = propTypes;
SearchContainer.defaultProps = defaultProps;

export default SearchContainer;