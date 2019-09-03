
    import React from 'react'
    import './Checkbox.module.css'
  
    class Checkbox extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
  
        };
      }
  
      render() {
        return (
          <div className="checkFarm">
            <ul className="chkFarmUL">
              {this.props.data.map((item, key) =>
                <li key={key} index={item.id}>
                  <label className="check" >
                    <input type="radio" name={item.name} value={item.value} defaultChecked={item.selected} onClick={this.props.onChange}  />
                    <span className="ico"></span>
                    <span className="txt f_bold">{item.text}</span>
                  </label>
                </li>
              )}
            </ul>
          </div>
        );
      }
    }
  
    export default Checkbox
    