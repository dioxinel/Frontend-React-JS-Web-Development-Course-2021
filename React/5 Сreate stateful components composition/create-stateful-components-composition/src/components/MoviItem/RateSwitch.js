import React from "react";
import { ThemedButton } from "../ThemedButton";


export class RateSwitch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {shown: false}
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch() {
    this.setState({shown: !this.state.shown})
  }
  render() {
    return (
      <div>
        {this.state.shown ? this.props.data : null }
        <ThemedButton onClick={this.handleSwitch} text={this.state.shown ? "Hide Rate" : "Show Rate"}/> 
      </div>     
    );
  }
}