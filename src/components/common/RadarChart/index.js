
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
        
         this.Tmap = window.Tmap;
        
      }

      componentDidMount() {
       
        this.map = new this.Tmap.Map({
          div: this.props.id,
          width: '100%',
          height: '400px',
          minZoom: 7,
          maxZoom: 19
        });
      }

      render() {
        const { chartoption, customerMapData, customerType, id } = this.props;
        const hidden = {display:'none'};
        const show = {display:'block'};
        return (
          <div className="segmentBody">
            {this.props.children}
            <div className={cx('RadarChart-container')}>
              <div id={id} ref={(map) => { this.mapDiv = map; }} style={customerType === 'h'? show:hidden}></div>
              <div style={customerType === 'h' ? hidden : show}>
                <HighchartsReact highcharts={Highcharts} options={chartoption} />
              </div>
            </div>
          </div>
        );
      }
}
  
export default RadarChart
    