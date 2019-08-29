import React from 'react'
import styles from './BodyWrapper.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const BodyWrapper = ({children}) => (
  <div className={cx('wrapper')}>{children}</div>
);
  
export default BodyWrapper
  