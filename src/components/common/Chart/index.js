
import React from 'react'
import styles from './Chart.module.css';
import classNames from 'classnames/bind';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
  
const cx = classNames.bind(styles);

class Chart extends React.Component {
      constructor(props) {
        super(props);

      }

      static SalesCheck01 = ()=>(
        <div className="checkFarm">
          <ul className="chkFarmUL">
            <li>
              <label className="check">
                <input type="checkbox" name="" />
                <span className="ico"></span>
                <span className="txt f_bold">2nd Device 포함</span>
							</label>
            </li>
            <li>
              <label className="check">
                <input type="checkbox" name="" />
                <span className="ico"></span>
                <span className="txt f_bold">Table 포함</span>
							</label>
            </li>
            <li>
              <label className="check">
                <input type="checkbox" name="" />
                <span className="ico"></span>
                <span className="txt f_bold">데이터 쉐어링 포함</span>
							</label>
						</li>
					</ul>
				</div>
      );
  
      render() {
        
        return (
          <div className="segmentBody">
            {this.props.children}
            <div className={cx('chart-container')}>
              <HighchartsReact highcharts={Highcharts} options={this.props.option} />
            </div>
          </div>
        );
      }
}
  
export default Chart
    