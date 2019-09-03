
import React from 'react'
import styles from './RadarChart.module.css';
import classNames from 'classnames/bind';
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official'
  
HighchartsMore(Highcharts);

const cx = classNames.bind(styles);

class RadarChart extends React.Component {
      constructor(props) {
        super(props);

      }

      render() {
        const { chartoption } = this.props;
        console.log(chartoption)
        return (
          <div className="segmentBody">
            {this.props.children}
            <div className={cx('RadarChart-container')}>
              <HighchartsReact highcharts={Highcharts} options={chartoption} />
            </div>
          </div>
        );
      }
}
  
export default RadarChart
    