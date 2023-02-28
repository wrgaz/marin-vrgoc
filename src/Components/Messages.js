import {Component} from "react";
import React from "react";


class Messages extends Component {
  render() {
    const {messages} = this.props;
    const message = messages.map((message, i) => this.renderMessage(message,i));
    
    
    return (
      <ul className="Messages">
        {message}
      </ul>
    );
  }

  renderMessage(message, i) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const myMessage = member.id === currentMember.id;
    const displayMessage = myMessage ? "Messages-message currentMember" : "Messages-message";
    
    return (

      <li className={displayMessage} key={i}>
        
        <span className="avatar" style={{ backgroundColor: member.clientData.color }}/>
     
        
        <div className="Message-content">
          <div className="username">
        
            {member.clientData.username}
            
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
      
      
    );
  }
}

export default Messages;