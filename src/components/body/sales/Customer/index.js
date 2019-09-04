import React from 'react'
import styles from './Customer.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import RadarChart from 'components/common/RadarChart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const Customer = ({ dropdown1, radarChartOption, customerMapData, customerType}) => {


  return (
    <Card>
      <Card.Header desc={'고객/상권 특성'}>
        <Card.HeaderRight
          dropdown1={dropdown1} />
      </Card.Header>
      <RadarChart chartoption={radarChartOption} customerMapData={customerMapData} customerType={customerType} id="salesTmapContainer"></RadarChart>
    </Card>
  )
};

export default Customer
