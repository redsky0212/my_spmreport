
import React from 'react'
import styles from './RadarChart.module.css';
import classNames from 'classnames/bind';
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official'
import { tsMappedType } from '@babel/types';
  
HighchartsMore(Highcharts);

const cx = classNames.bind(styles);

class RadarChart extends React.Component {
      constructor(props) {
        super(props);
        this.mapDiv = null;
        this.map = null;
      }

      componentDidMount() {
        // this.map = new window.Tmap.Map({
        //   div: 'salesTmapContainer',
        //   width: '100%',
        //   height: '100%'
        // });
      }

      render() {
        const { chartoption, customerMapData, customerType } = this.props;
        console.log(customerType)
        return (
          <div className="segmentBody">
            {this.props.children}
            <div className={cx('RadarChart-container')}>
              {customerType === 'h'?
                <div id="salesTmapContainer" ref={(map) => { this.mapDiv = map; }}>지도</div>:
                <HighchartsReact highcharts={Highcharts} options={chartoption} />
              }
              
            </div>
          </div>
        );
      }
}
  
export default RadarChart
    