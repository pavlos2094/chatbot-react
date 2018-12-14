import React, {Component} from 'react';

class MessageList extends Component {

  componentDidUpdate() {
  	//Scroll history to bottom after every update 
  	this.refs.chatHistory.scrollTop = this.refs.chatHistory.scrollHeight;
  }

  render() {
  	//Render each message based on whether it is from user or from "robot"
    return (
      <div ref="chatHistory" className="chat-history">
      	<ul style={{listStyleType: "none"}}>
	        {this.props.messages.map(message => {
	        	if (message.senderId === "Me") {
		        	return(
		        		<li className="clearfix" key={message.index}>
						    <div className="message-data align-right">
						    	<span className="message-data-time" >{message.time}, Today</span> &nbsp; &nbsp;
							    <span className="message-data-name" >Me</span> <i className="fa fa-circle me"></i>
						    </div>
						    <div className="message other-message float-right">
						    	{message.text}
						    </div>
						</li>
		        	);
		        }
		        else {
		        	return (
			        	<li key={message.index}>
				            <div className="message-data">
				            	<span className="message-data-name"><i className="fa fa-circle online"></i> Prediction Robot</span>
				            	<span className="message-data-time">{message.time}, Today</span>
				            </div>
				            <div className="message my-message">
				            	{message.text}
				            </div>
				        </li>
				    );
		        }
	        })}
	    </ul>
      </div>
    )
  }
}

export default MessageList;