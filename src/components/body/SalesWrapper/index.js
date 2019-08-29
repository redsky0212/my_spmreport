import React from 'react'
import styles from './SalesWrapper.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const SalesWrapper = ({children}) => (
    (
        <div className='container'>
            <div className='groupbox'>
                
            </div>
            <div className='chartArea'>
                <div className='left'>
                    <div className='upper'>
                        
                    </div>
                    <div className='downer'>
                        
                    </div>
                </div>
                <div className='right'>
                    <div className='upper'>
                        
                    </div>
                    <div className='downer'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
);
  
export default SalesWrapper
  