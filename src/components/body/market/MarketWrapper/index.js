import React from 'react'
import styles from './MarketWrapper.module.css';
import classNames from 'classnames/bind';

// import CountGroupBox from '../CountGroupBox';   // CountGroupBox 컨테이너
// import TrendChart from 'components/body/sales/TrendChart';
// import Prediction from 'components/body/sales/Prediction';
// import Customer from 'components/body/sales/Customer';

const cx = classNames.bind(styles);



const MarketWrapper = ({ 
    // topCountData, 
    // trendChartOption, 
    // dropdown1, 
    // dropdown2, 
    // checkbox1, 
    // predictionData, 
    // predictionGridData, 
    // customerDropdown, 
    // customerChartOption,
    // customerMapData,
    // customerType
}) => {

    // 임시
    const style1 = {height:'300px'};

    return (
        <div className='container'>
            <div className='groupbox'><div style={style1}></div>
                {/* <CountGroupBox 
                    cnt={topCountData.get('current_handset_cnt') || '-'}
                    rate={topCountData.get('current_handset_rate')}
                    index={1}
                    desc={'당월무선실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_5g_cnt') || '-'}
                    rate = { topCountData.get('current_5g_rate')}
                    index={2}
                    desc={'당월5G실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_wire_cnt') || '-'}
                    rate={topCountData.get('current_wire_rate')}
                    index={3}
                    desc={'당월유선실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_visit_cnt') || '-'}
                    rate={topCountData.get('current_visit_rate')}
                    index={4}
                    desc={'내방대비 판매비율'}
                /> */}
            </div>
            <div className='chartArea'>
                <div className='left'>
                    <div className='upper'><div style={style1}></div>
                        {/* <TrendChart 
                            trendChartOption={trendChartOption} 
                            dropdown1={dropdown1} 
                            dropdown2={dropdown2}
                            checkbox1={checkbox1} /> */}
                    </div>
                    <div className='downer segmentDivder'><div style={style1}></div>
                        {/* <Prediction
                            predictionData={predictionData}
                            predictionGridData={predictionGridData} /> */}
                    </div>
                </div>
                <div className='right'>
                    <div className='upper'>
                        <div style={style1}></div>
                    </div>
                    <div className='downer'><div style={style1}></div>
                        {/* <Customer
                            dropdown1={customerDropdown}
                            radarChartOption={customerChartOption}
                            customerMapData={customerMapData}
                            customerType={customerType} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketWrapper
