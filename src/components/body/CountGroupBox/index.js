import React from 'react'
import styles from './CountGroupBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const CountGroupBox = ({ topCountData }) => (
  (
    <React.Fragment>

      <div className="data1">
        <ul className="datanum">
          <li className="datanum_cnt">{topCountData.get('current_handset_cnt')}건</li>
          <li className="datanum_desc">
            <span className="left">당월무선실적</span>
            <span className="right">
              <img src={require('resources/images/arrow_inc.png')} alt="증가" />18.2%
            </span>
					</li>
				</ul>
			</div>

      <div className="data2">
        <ul className="datanum">
          <li className="datanum_cnt">20건</li>
          <li className="datanum_desc">
            <span className="left">당월5G실적</span>
            <span className="right">
              <img src={require('resources/images/arrow_dec.png')} alt="감소" />6.2%
            </span>
					</li>
				</ul>
			</div>

      <div className="data3">
        <ul className="datanum">
          <li className="datanum_cnt">150건</li>
          <li className="datanum_desc">
            <span className="left">당월유선실적</span>
            <span className="right">
              <img src={require('resources/images/arrow_inc.png')} alt="증가" />18.2%
            </span>
					</li>
				</ul>
			</div>

      <div className="data4">
        <ul className="datanum">
          <li className="datanum_cnt">150건</li>
          <li className="datanum_desc">
            <span className="left">내방대비 판매비율</span>
            <span className="right">
              <img src={require('resources/images/arrow_dec.png')} alt="감소" />7.2%
            </span>
					</li>
				</ul>
			</div>

    </React.Fragment>
  )
);

export default CountGroupBox
