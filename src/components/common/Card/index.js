import React, {Component} from 'react'
import styles from './Card.module.css';
import classNames from 'classnames/bind';

import Dropdown from 'components/common/Dropdown';

import * as utils from 'utils';



const cx = classNames.bind(styles);

class Card extends Component{

    static Header = ({children, desc}) => (
        <div className="segmentHeader">
            <div className="segmentTitle">
                <h3>{desc}</h3>
            </div>
            {children}
        </div>
    );

/**
* $(".sel_02").click(function() {
$(this).find("div.mask_box2").toggle();
});
$(".sel_02 ul li").click(function() {
var allOptions2 = $(this).parent().children("li");

allOptions2.children("a").removeClass("on");
$(this).children("a").addClass("on");
$(this).closest(".sel_02").find("p").html($(this).children("a").html());
});
*/
    static HeaderRight = ({dropdownData1, dropdownData2}) => {

        const dropDown1 = dropdownData1? (<li><Dropdown data={dropdownData1} /></li>) : null;
        const dropDown2 = dropdownData2? (<li><Dropdown data={dropdownData2} /></li>) : null;

        return (
        <div className="btnFarm">
            <ul className="btnFarmUL">
                {dropDown1}
                <li>
                    <div className={cx('selectbox2', 'sel_03', 'card-sel_02')} >
                        <div className="select">
                            <p className="tit" title="조회월"><span>기간구분</span></p>
                            <div className="mask mask_box3">
                                <div className="overcon" >
                                    <ul className="con">
                                        <li><a><span>2019년 02월</span></a></li>
                                        <li><a><span>2019년 01월</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
					</div>
				</li>
                <li><button className="com_gray bgArrow">Coaching Tip</button></li>
			</ul>
		</div >)};

    render(){
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
};

export default Card;
