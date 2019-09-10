import React from 'react'
import styles from './PredictionSales.module.css';
import classNames from 'classnames/bind';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const PredictionSales = ({ predictionChartData, predictionGridData, pred_qty }) => {

  const colStyle1 = { width: 'auto' };
  const colStyle2 = { width: '20%' };
  const colStyle3 = { width: '20%' };
  const { areaData, medianIdx, lineIdx } = predictionChartData;
  const series_data = [
    { data: areaData, type: 'column', color: '#f72131', name: '매장수', borderWidth: 2, borderColor: '#f72131' },
    { type: 'line', color: '#9a000e', name: '중간값', marker: { enabled: false } },
    { type: 'line', color: '#0000ff', name: '예상건수', dashStyle: 'shortdash', marker: { enabled: false } }
  ];
  const plotLines_data = [{
    color: '#9a000e',
    width: 2,
    value: medianIdx,
    zIndex: 5
  },
  {
    color: '#0000ff',
    id: '예상 건수',
    width: 2,
    value: lineIdx,
    zIndex: 5,
    dashStyle: 'shortdash'
  }];
  const options = {
            chart: {
              typs: 'column',
              spacingLeft: 10,
              spacingRight: 10,
              backgroundColor: 'rgba(0,0,0,0)'
            },
            title: { text: '' },
            credits: { enabled: false },
            xAxis: {
              labels: {
                enabled: true,
                formatter: function () {
                  let val = areaData[this.value][0].split('~');
          return val[0];
        }
                  },
        plotLines: plotLines_data
                },
        yAxis: {
          title: { text: '' },
          labels: { enabled: false }
        },
        legend: {
          enabled: true,
            align: 'right',
              verticalAlign: 'top',
                margin: -30
        },
        series: series_data,
          plotOptions: {
          series: { marker: { enabled: false } }
        },
        tooltip: {
          pointFormatter: function () { return this.y }
        }
  };

  return (
    <React.Fragment>
      <div className="segmentDiv">
        <Card>
          <Card.Header desc={'입점 매력도 기반 판매량 예상'}>
            <Card.HeaderRight />
          </Card.Header>
          <Card.Body>
            <table className="tbl1 mt30">
              <colgroup>
                <col style={colStyle1} />
                <col style={colStyle2} />
                <col style={colStyle3} />
							</colgroup>
              <tbody>
                {predictionGridData.map((item, key) =>
                  <tr key={key}>
                    <td>{item.desc}</td>
                    <td>{item.top}</td>
                    <td><span className={item.cntType=='+'?'text_blue':'text_red'}>{item.cntType+''+item.cnt+'건'}</span></td>
                  </tr>
                )}
              </tbody>
						</table>
          </Card.Body>
        </Card>
      </div>
      <div className="segmentDiv bgVblue">
        <div className="segmentHeader">
          <div className="segmentTitle">
            <h3>예상판매량</h3>
            <p className="totalSale">{pred_qty}건</p>
            <p className="descSale">전월 시장 Size기준</p>
          </div>
        </div>
				<div className="segmentBody">
          <HighchartsReact highcharts={Highcharts} options={options} />
				</div>
      </div>
    </React.Fragment>
  )
};

export default PredictionSales
