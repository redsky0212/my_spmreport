import React from 'react'
import styles from './TypeStatistics.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import * as utils from 'utils';


const cx = classNames.bind(styles);

const TypeStatistics = ({ typeChartOption, dropdown1, dropdown2 }) => {

    return (
        <Card>
            <Card.Header text={'유형별 통계'} desc={'유형별 통계'}>
                <Card.HeaderRight
                    dropdown1={dropdown1}
                    dropdown2={dropdown2}
                />
            </Card.Header>
            <div className='segmentDivder'>
                <div>
                    <Chart chartoption={typeChartOption.moptions}> </Chart>
                </div>
                <div>
                    <HighchartsReact highcharts={Highcharts} options={typeChartOption.aoptions} />
                </div>
                <div>
                    <HighchartsReact highcharts={Highcharts} options={typeChartOption.foptions} />
                </div>
            </div>
        </Card>
    )
};

export default TypeStatistics
