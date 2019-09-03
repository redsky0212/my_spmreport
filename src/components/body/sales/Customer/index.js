import React from 'react'
import styles from './Customer.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const Customer = ({ dropdown1, radarChartOption}) => {


  return (
    <Card>
      <Card.Header desc={'고객/상권 특성'}>
        <Card.HeaderRight
          dropdown1={dropdown1} />
      </Card.Header>
      <Chart chartoption={radarChartOption}></Chart>
    </Card>
  )
};

export default Customer
