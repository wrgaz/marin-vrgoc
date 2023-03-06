import React, { Component } from 'react'
import Messages from "./Components/Messages";
import './App.css';
import Input from "./Components/Input";
import randomColorRGB from 'random-color-rgb';
import generateName from 'sillyname';





export default class App extends Component {

  constructor() {
    super();
    this.drone = new window.Scaledrone("owJFia0e9s25VbNs", {
      data: this.state.member
    });
    
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });

  }
  

  state = {
    messages: [],
    member: {
      username: generateName(),
      color: randomColorRGB()
    }
     
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>CHAT APPLICATION</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessageHandler}
        />
      </div>
    );
  }

  onSendMessageHandler = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }
  
}
