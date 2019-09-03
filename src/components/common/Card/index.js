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
    static Body = ({children}) => (
        <div className="segmentBody">
            {children}
		</div>
    );



    static HeaderRight = ({ dropdown1, dropdown2}) => {

        const dropDown1 = dropdown1 ? dropdown1 : null;
        const dropDown2 = dropdown2 ? dropdown2 : null;

        return (
        <div className="btnFarm">
            <ul className="btnFarmUL">
                <li>{dropDown1}</li>
                <li>{dropDown2}</li>
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
