import React from 'react'
import styles from './Navi.module.css';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const activeStyle = {
    color: '#000000',
    fontWeight:'700',
    textDecoration:'none',
    background:'#ffffff',
    height:'48px',
    borderBottom:'3px solid #000000'
};

const Navi = () => (
    (
        <div className="tab_area">
            <div className="tab_wrap">
                <div className="tabmenu" id="tabmenu_type">
                    <NavLink exact to="/" activeStyle={activeStyle}>판매실적</NavLink>
                    <NavLink exact to="/market" activeStyle={activeStyle}>상권분석</NavLink>
                    <NavLink exact to="/work" activeStyle={activeStyle}>업무처리</NavLink>
                    <NavLink exact to="/customer" activeStyle={activeStyle}>단골고객</NavLink>
                </div>
            </div>
        </div>
    )
);
  
export default Navi
  