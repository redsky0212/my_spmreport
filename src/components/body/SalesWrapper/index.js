import React from 'react'
import styles from './SalesWrapper.module.css';
import classNames from 'classnames/bind';

// CountGroupBox 컨테이너
import CountGroupBox from '../CountGroupBox';

const cx = classNames.bind(styles);



const SalesWrapper = ({ topCountData }) => {
    
    

    return (
        <div className='container'>
            <div className='groupbox'>
                <CountGroupBox topCountData={topCountData} />
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
    );
};

export default SalesWrapper
