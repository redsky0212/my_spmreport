
import React from 'react'
import styles from './Dropdown.module.css';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.sel01 = null;
    this.selItem = null;
    this.state = {
      isToggleOn: false,
      selectedIdx: 0
    };

    this.onSelToggle = this.onSelToggle.bind(this);
  }

  onSelToggle = (event) => {
    this.setState({ isToggleOn : this.state.isToggleOn? false:true});
    if( this.state.isToggleOn ){
      this.sel01.style.display = 'none';
    }else{
      this.sel01.style.display = 'block';
    }
  };

  render() {

    const selItemStyle = {display:'block'};
    const mask_box2 = {width:'148px', height:'130px'};
    
    return (
      <div className={cx('selectbox2', this.props.styletype === 2 ? 'Dropdown-sel_02' : 'Dropdown-sel_01')} onClick={this.onSelToggle}>
        <div className="select">
          <p className="tit" title="조회월">{this.props.data.map((item, key) => item.selected ? <span value={item.value}>{item.text}</span> : '')}</p>
          <div className="mask" style={mask_box2} ref={(sel) => { this.sel01 = sel; }}>
            <div className="overcon Dropdown-sel_item" style={selItemStyle}>
              <ul className="con">
                {this.props.data.map((item, key) =>
                  <li 
                    className={cx(item.selected ? 'Dropdown-sel_item_on' : '' )}
                    key={item.id.toString()}
                    index={item.id}
                    onClick={this.props.onChange}>
                    <a value={item.value}><span>{item.text}</span></a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Dropdown
    