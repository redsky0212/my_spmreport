import React from 'react'
import styles from './Navi.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Navi = () => (
    (
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
    )
);
  
export default Navi
  