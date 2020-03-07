import React, { Component } from "react";
import Switch from "react-switch";

class Slider extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <>
        <Switch
          className="slider"
          onChange={this.handleChange}
          checked={this.state.checked}
          uncheckedIcon
          checkedIcon
          activeBoxShadow="0 0 0 0 0"
          boxShadow="0 0 0 0 0"
          onColor="#000"
          onHandleColor="#fff"
          offColor="#fff"
          offHandleColor="#000"
        />
        <div id="label">
          <label>Dark mode</label>
        </div>
      </>
    );
  }
}

export default Slider;
