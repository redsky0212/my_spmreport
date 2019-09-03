import React from 'react'
import styles from './Prediction.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const Prediction = ({ predictionData }) => {

  const colStyle1 = { width: 'auto' };
  const colStyle2 = { width: '20%' };
  const colStyle3 = { width: '20%' };

  return (
    <React.Fragment>
      <div class="segmentDiv">
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
                <tr>
                  <td>최인접 LG매장까지의 거리</td>
                  <td>상위 0.2%</td>
                  <td><span className="text_blue">+0.2건</span></td>
                </tr>
                <tr>
                  <td>100m ~ 1,000m 이내 인접 거주인구 평균 통화량</td>
                  <td>상위 0.1%</td>
                  <td><span className="text_blue">+8.2건</span></td>
                </tr>
                <tr>
                  <td>스타벅스까지의 거리</td>
                  <td>상위 1.4%</td>
                  <td><span className="text_blue">+6.7건</span></td>
                </tr>
              </tbody>
						</table>
          </Card.Body>
        </Card>
      </div>
      <div className="segmentDiv bgVblue">
        <div className="segmentHeader">
          <div className="segmentTitle">
            <h3>예상판매량</h3>
            <p className="totalSale">140건</p>
            <p className="descSale">전월 시장 Size기준</p>
          </div>
        </div>
				<div className="segmentBody">
          <img src="resources/~mockup/Untitled-8.png" />
				</div>
      </div>
    </React.Fragment>
  )
};

export default Prediction
