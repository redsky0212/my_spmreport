import React from 'react'
import styles from './SalesWrapper.module.css';
import classNames from 'classnames/bind';

import CountGroupBox from '../CountGroupBox';   // CountGroupBox 컨테이너
import TrendChart from 'components/body/sales/TrendChart';

const cx = classNames.bind(styles);



const SalesWrapper = ({ topCountData, trendChartOption }) => {
    return (
        <div className='container'>
            <div className='groupbox'>
                <CountGroupBox 
                    cnt={topCountData.get('current_handset_cnt')}
                    rate={topCountData.get('current_handset_rate')}
                    index={1}
                    desc={'당월무선실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_5g_cnt')}
                    rate = { topCountData.get('current_5g_rate')}
                    index={2}
                    desc={'당월5G실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_wire_cnt')}
                    rate={topCountData.get('current_wire_rate')}
                    index={3}
                    desc={'당월유선실적'}
                />
                <CountGroupBox
                    cnt={topCountData.get('current_visit_cnt')}
                    rate={topCountData.get('current_visit_rate')}
                    index={4}
                    desc={'내방대비 판매비율'}
                />
            </div>
            <div className='chartArea'>
                <div className='left'>
                    <div className='upper'>
                        <TrendChart trendChartOption={trendChartOption} />
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
