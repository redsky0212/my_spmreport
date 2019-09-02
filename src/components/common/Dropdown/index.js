
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

    this.onSelClick = this.onSelClick.bind(this);
    this.onSelItemClick = this.onSelItemClick.bind(this);
    this.onSelItemMouseover = this.onSelItemMouseover.bind(this);
    this.onSelItemMouseLeave = this.onSelItemMouseLeave.bind(this);
  }

  onSelClick = (event) => {
    
    this.setState({ isToggleOn : this.state.isToggleOn? false:true});
    if( this.state.isToggleOn ){
      this.sel01.style.display = 'none';
    }else{
      this.sel01.style.display = 'block';
    }

  };

  onSelItemMouseover = (event) => {
    var allOptions = Array.from(event.currentTarget.parentElement.children);
    allOptions.map((element, idx) => {
      element.className = 'on';
    })
  };
  onSelItemMouseLeave = (event) => {
    var allOptions = Array.from(event.currentTarget.parentElement.children);
    allOptions.map((element, idx) => {
      element.className = '';
    })
  };
  onSelItemClick = (event) => {
    var allOptions = Array.from(event.currentTarget.parentElement.children);
    allOptions.map((element, idx) => {
      element.className = '';
    })
    debugger
    let idx = event.currentTarget.getAttribute('index');
    this.setState({selectedIdx:parseInt(idx,10)});
    event.currentTarget.className = 'on';
  };
  // $(".sel_02 ul li").click(function() {
  //   var allOptions2 = $(this).parent().children("li");
    
  //   allOptions2.children("a").removeClass("on");
  //   $(this).children("a").addClass("on");
  //   $(this).closest(".sel_02").find("p").html($(this).children("a").html());
  //   });
  
  render() {

    const selItemStyle = {display:'block'};
    const mask_box2 = {width:'148px', height:'130px'};
    const items = this.props.data.map((item, key) =>
        <li 
          key={key} 
          index={key}
          onClick={this.onSelItemClick} 
          onMouseOver={this.onSelItemMouseover}
          onMouseLeave={this.onSelItemMouseLeave}
          className={this.state.selectedIdx==key?'on':''}
        >
          <a value={item.value}><span>{item.text}</span></a>
        </li>
    );

    return (
      <div className={cx('selectbox2', 'Dropdown-sel_01')} onClick={this.onSelClick}>
        <div className="select">
          <p className="tit" title="조회월"><span>실적구분</span></p>
          <div className="mask" style={mask_box2} ref={(sel) => { this.sel01 = sel; }}>
            <div className="overcon" style={selItemStyle}>
              <ul className="con">
                {items}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Dropdown
    