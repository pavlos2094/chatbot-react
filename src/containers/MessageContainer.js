import React, {Component} from 'react';

import MessageList from "../components/MessageList";
import Title from "../components/Title";
import SendMessageForm from "../components/SendMessageForm";

class MessageContainer extends Component {
	constructor() {
		super();
		this.state = {
			messages: [
		 		{
		    		senderId: "Me",
		    		text: "who'll win?",
		    		time: 0
		  		},
		  		{
		   			 senderId: "Prediction Robot",
		   			 text: "who'll win?",
		   			 time: 0
		  		}
			]
		}
		this._handleInputChange = this._handleInputChange.bind(this);
	}

	componentDidMount() {
		//here i am gonna do my requests when starting only
	}

	// componentDidUpdate() {
	// 	let newInput = {
	// 		senderId: "Me",
	// 		text: this.state.messageToSend
	// 	}
	// 	this.setState({
	// 		// messageToSend: "",
	// 		messages: this.state.messages.push(newInput)
	// 	});

	// }

	render() {
		return (
			<div className="chat">
				<Title />
				<MessageList messages={this.state.messages}/>
				<SendMessageForm onInputChange={this._handleInputChange}/>
			</div>
		);
	}

	_handleInputChange(messageToSend) {
		let newInput = {
			senderId: "Me",
			text: messageToSend,
			time: this._getCurrentTime()
		}
		this.setState({
			messages: [...this.state.messages, newInput]
		});
	}

	_getCurrentTime() {
      return new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    }
}

export default MessageContainer;