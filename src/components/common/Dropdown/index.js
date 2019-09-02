
import React from 'react'
import styles from './Dropdown.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.sel01 = null;
    this.state = {
      isToggleOn: false
    };

    this.onSelClick = this.onSelClick.bind(this);
  }

  onSelClick = (event) => {
    
    this.setState({ isToggleOn : this.state.isToggleOn? false:true});
    if( this.state.isToggleOn ){
      this.sel01.style.display = 'none';
    }else{
      this.sel01.style.display = 'block';
    }

  };
  
  render() {
    return (
      <div className={cx('selectbox2', 'Dropdown-sel_01')} onClick={this.onSelClick}>
        <div className="select">
          <p className="tit" title="조회월"><span>실적구분</span></p>
          <div className="mask mask_box2" ref={(sel) => { this.sel01 = sel; }}>
            <div className="overcon">
              <ul className="con">
                <li><a value=""><span>실적구분</span></a></li>
                <li><a value="5g"><span>5G</span></a></li>
                <li><a value="else"><span>else</span></a></li>
                <li><a value="total"><span>total</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Dropdown
    