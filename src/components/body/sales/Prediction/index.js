import React from 'react'
import styles from './Prediction.module.css';
import classNames from 'classnames/bind';

import Card from 'components/common/Card';
import Chart from 'components/common/Chart';

import * as utils from 'utils';



const cx = classNames.bind(styles);

const Prediction = ({ predictionData, predictionGridData }) => {

  const colStyle1 = { width: 'auto' };
  const colStyle2 = { width: '20%' };
  const colStyle3 = { width: '20%' };

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
