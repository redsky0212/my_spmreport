import React from 'react'
import styles from './CountBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const CountBox = ({ index, title }) => {
 
  return (
    <div className={`data${index}`}>
        <ul className="datanum">
            <li className="datanum_cnt">33333건</li>
            <li className="datanum_desc">
                <span className="left">{title}</span>
                <span className="right">
                    <img src={require('resources/images/arrow_inc.png')} alt="증가" />3213%
                </span>
		    </li>
		</ul>
	</div>
  )
};

export default CountBox
