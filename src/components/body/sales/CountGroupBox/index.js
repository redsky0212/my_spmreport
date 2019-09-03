import React from 'react'
import styles from './CountGroupBox.module.css';
import classNames from 'classnames/bind';

import * as utils from 'utils';

import arrowInc from 'resources/images/arrow_inc.png';
import arrowDec from 'resources/images/arrow_dec.png';

const cx = classNames.bind(styles);




const CountGroupBox = ({ cnt, rate, index, desc }) => {

  return (
    <div className={`data${index}`}>
      <ul className="datanum">
        <li className="datanum_cnt">{utils.addComma(cnt)}건</li>
        <li className="datanum_desc">
          <span className="left">{desc}</span>
          <span className="right">
            {isNaN(rate) ? null : parseFloat(rate) >= 0
                ? <img src={arrowInc} alt={cx("증가")} />
                : <img src={arrowDec} alt={cx("감소")} />}
            {isNaN(Math.abs(rate).toFixed(2)) ? '- ' : Math.abs(rate).toFixed(2)}%
          </span>
        </li>
      </ul>
    </div> 
  )
};

export default CountGroupBox
