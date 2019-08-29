import React from 'react'
import styles from './LayoutWrapper.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const LayoutWrapper = ({children}) => (
  <div className={cx('wrapper')}>{children}</div>
);
  
export default LayoutWrapper
  