import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={event => this.onSubmitHandler(event)}>
          <input
            onChange={event => this.onChangeHandler(event)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message"
            autoFocus={true}
          />
        
          
          <button>Send</button> 
        </form>
      </div>
    );
  }

  onChangeHandler(event) {
    this.setState({text: event.target.value});
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

};

export default Input;