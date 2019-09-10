import React from 'react'
import styles from './CustomerMarket.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import RadarChart from 'components/common/RadarChart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const CustomerMarket = ({ customerDropdown, customerChartOption, customerMapData, customerType }) => {

    return (
        <Card>
            <Card.Header desc={'고객/상권 특성'}>
                <Card.HeaderRight
                    dropdown1={customerDropdown} />
            </Card.Header>
            <RadarChart chartoption={customerChartOption} customerMapData={customerMapData} customerType={customerType}></RadarChart>
        </Card>
    )
};

export default CustomerMarket
