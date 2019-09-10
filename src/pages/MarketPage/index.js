import React from 'react'
import styles from './MarketPage.module.css';
import classNames from 'classnames/bind';

// import { CountBoxContainer, TrendChartContainer, PredictionSalesContainer, TypeStatisticsContainer } from 'containers/body/sales';

const cx = classNames.bind(styles);



const MarketPage = () => {
    console.log('-- Call MarketPage');
    const style1 = {height:'300px'}
    return (
        <div className='container'>
            <div className='chartArea'>
                <div className='left'>
                    <div className='upper'><div style={style1}></div>
                        {/* <TrendChartContainer /> */}
                    </div>
                    <div className='downer segmentDivder'><div style={style1}></div>
                        {/* <PredictionSalesContainer /> */}
                    </div>
                </div>
                <div className='right'>
                    <div className='upper'><div style={style1}></div>
                        {/* <TypeStatisticsContainer /> */}
                    </div>
                    <div className='downer'><div style={style1}></div>
                        {/* Customer */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPage
