import React from 'react'
import styles from './CustomerMarket.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import RadarChart from 'components/common/RadarChart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const CustomerMarket = ({ customerDropdown, customerChartOption, customerMapData, customerType }) => {

    // map 관련 로직 임시 
    //Common    
    // const { centerPosition } = this.props;
    // const centerLat = centerPosition.lat || null;
    // const centerLon = centerPosition.lon || null;
    // const start = 0;
    // let end = 0;
    // const colors = ["#ff0000", "#ff0200", "#ff0500", "#ff0700", "#ff0900", "#ff0c00", "#ff0e00", "#ff1100", "#ff1300", "#ff1500", "#ff1800", "#ff1a00", "#ff1c00", "#ff1f00", "#ff2100", "#ff2300", "#ff2600", "#ff2800", "#ff2a00", "#ff2d00", "#ff2f00", "#ff3200", "#ff3400", "#ff3600", "#ff3900", "#ff3b00", "#ff3d00", "#ff4000", "#ff4200", "#ff4400", "#ff4700", "#ff4900", "#ff4c00", "#ff4e00", "#ff5000", "#ff5300", "#ff5500", "#ff5700", "#ff5a00", "#ff5c00", "#ff5e00", "#ff6100", "#ff6300", "#ff6500", "#ff6800", "#ff6a00", "#ff6d00", "#ff6f00", "#ff7100", "#ff7400", "#ff7600", "#ff7900", "#ff7b00", "#ff7e00", "#ff8000", "#ff8300", "#ff8500", "#ff8800", "#ff8b00", "#ff8d00", "#ff9000", "#ff9200", "#ff9500", "#ff9800", "#ff9a00", "#ff9d00", "#ff9f00", "#ffa200", "#ffa400", "#ffa700", "#ffaa00", "#ffac00", "#ffaf00", "#ffb100", "#ffb400", "#ffb700", "#ffb900", "#ffbc00", "#ffbe00", "#ffc100", "#ffc300", "#ffc600", "#ffc900", "#ffcb00", "#ffce00", "#ffd000", "#ffd300", "#ffd500", "#ffd800", "#ffdb00", "#ffdd00", "#ffe000", "#ffe200", "#ffe500", "#ffe800", "#ffea00", "#ffed00", "#ffef00", "#fff200", "#fff400", "#fff700"];

    // //setting
    // const markerLayer = new this.Tmap.Layer.Markers(layerName);
    // this.map.addLayer(markerLayer);

    // list.map(
    //     (store) => {
    //         const org_nm = 'heatmap';
    //         const { org_d_code, cust_lon, cust_lat } = store;

    //         const diagonal = Math.sqrt(Math.pow(Math.abs(centerLon - cust_lon), 2) + (Math.pow(Math.abs(centerLat - cust_lat), 2)));
    //         if (diagonal > end) {
    //             end = diagonal;
    //         }
    //         console.log(end)

    //         const size = new this.Tmap.Size(20, 26);
    //         const offset = new this.Tmap.Pixel(-(size.w / 2), -size.h);
    //         const icon = new this.Tmap.Icon(heatPng, size, offset);
    //         const label = new this.Tmap.Label(org_nm);
    //         const marker = new this.Tmap.Markers(new this.Tmap.LonLat(cust_lon, cust_lat).transform('EPSG:4326', 'EPSG:3857'), icon, label);
    //         markerLayer.addMarker(marker);
    //     }
    // )

    return (
        <Card>
            <Card.Header desc={'고객/상권 특성'}>
                <Card.HeaderRight
                    dropdown1={customerDropdown} />
            </Card.Header>
            <RadarChart chartoption={customerChartOption} customerMapData={customerMapData} customerType={customerType} id="customerMarketMapDiv"></RadarChart>
        </Card>
    )
};

export default CustomerMarket
