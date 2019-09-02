import React from 'react'
import styles from './TrendChart.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const TrendChart = ({ trendChartOption }) => {


  return (
    <Card>
      <Card.Header desc={'실적 트렌드 그래프'}>
        <Card.HeaderRight></Card.HeaderRight>
      </Card.Header>
      <Chart charttype="salesTrend" option={trendChartOption}>
        <Chart.SalesCheck01 />
      </Chart>
    </Card>
  )
};

export default TrendChart
