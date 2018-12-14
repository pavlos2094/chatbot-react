import React, {Component} from 'react';

class MessageList extends Component {

  componentWillMount() {
        this.messages = this.props.messages;
    }	

  componentWillReceiveProps(nextProps) {
  	if (this.messages !== nextProps.messages) {
  		this.messages = nextProps.messages;
  	}
  }

  componentDidUpdate() {
  	this.refs.chatHistory.scrollTop = this.refs.chatHistory.scrollHeight;
  }

  render() {
    return (
      <div ref="chatHistory" className="chat-history">
      	<ul style={{listStyleType: "none"}}>
	        {this.messages.map(message => {
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