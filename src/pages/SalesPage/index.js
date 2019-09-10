import React from 'react'
import styles from './SalesPage.module.css';
import classNames from 'classnames/bind';

import { CountBoxContainer, TrendChartContainer, PredictionSalesContainer, TypeStatisticsContainer, CustomerMarketContainer } from 'containers/body/sales';

const cx = classNames.bind(styles);



const SalesPage = () => {
    console.log('-- Call SalesPage');
    return (
        <div className='container'>
            <div className='groupbox'>
                <CountBoxContainer />
            </div>
            <div className='chartArea'>
                <div className='left'>
                    <div className='upper'>
                        <TrendChartContainer />
                    </div>
                    <div className='downer segmentDivder'>
                        <PredictionSalesContainer />
                    </div>
                </div>
                <div className='right'>
                    <div className='upper'>
                        <TypeStatisticsContainer />
                    </div>
                    <div className='downer'>
                        <CustomerMarketContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesPage
