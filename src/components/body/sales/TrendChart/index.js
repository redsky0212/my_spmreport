import React from 'react'
import styles from './TrendChart.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const TrendChart = ({ trendChartOption, dropdown1, dropdown2, checkbox1 }) => {


  return (
    <Card>
      <Card.Header desc={'실적 트렌드 그래프'}>
        <Card.HeaderRight 
          dropdown1={dropdown1}
          dropdown2={dropdown2} />
      </Card.Header>
      <Chart chartoption={trendChartOption}>
        {checkbox1}
      </Chart>
    </Card>
  )
};

export default TrendChart
