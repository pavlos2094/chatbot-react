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
		   			 senderId: "Prediction Robot",
		   			 text: "Ask anything you want",
		   			 time: this._getCurrentTime(),
		   			 index: 0
		  		}
			],
			features: []
		}
		this._handleInputChange = this._handleInputChange.bind(this);
	}

	componentDidMount() {
		//Extract features
        const url = new URL('http://localhost:8081/features/');
        fetch(url, {
        	method: 'POST'
        }).then(priorFeatures => {
        	return priorFeatures.json();
       	}).then(features => {
       		this.setState({
       			features: features.feat_names
       		})
       	});
	}

	render() {
		return (
			<div className="chat">
				<Title />
				<MessageList messages={this.state.messages}/>
				<SendMessageForm onInputChange={this._handleInputChange}/>
			</div>
		);
	}

	_handleInputChange(message) {
		let newQuestion = {
			senderId: "Me",
			text: message,
			time: this._getCurrentTime(),
			index: this.state.messages.length
		};
		let params = {}, messageToSend;
	    this.state.features.map(feature => {
	    	feature = '(?:^|[ ])#('.concat(feature).concat(')=([0-9]+)');
	        let re = new RegExp(feature, "gm");
	        let str = message;
	        let m;
	        while((m = re.exec(str)) != null) {
	        	if (m.index === re.lastIndex) re.lastIndex++;
	        	params[m[1]] = m[2];
	        }
	    });
	    if (Object.keys(params).length === 0 && params.constructor === Object) {
	    	messageToSend = "No match found";
	    	let newAnswer = {
			senderId: "Prediction Robot",
			text: messageToSend,
			time: this._getCurrentTime(),
			index: this.state.messages.length + 1
			};
			this.setState({
				messages: [...this.state.messages, newQuestion, newAnswer]
			});
	    }
	    else {
	    	let url = new URL('http://localhost:8081/predict/');
          	params = JSON.stringify(params);
          	fetch(url, {
            	method: 'POST',
            	body: params,
            	headers: {'Content-Type': 'application/json'}
          	}).then(response => {
            //Parse respsone
            	var contextResponse;
            	return response.json();
            }).then(parsedResponse => {
            	let name = Object.keys(parsedResponse)[0];
            	messageToSend = name + " would be " + parsedResponse[name];
            	let newAnswer = {
					senderId: "Prediction Robot",
					text: messageToSend,
					time: this._getCurrentTime(),
					index: this.state.messages.length + 1
				};
				this.setState({
					messages: [...this.state.messages, newQuestion, newAnswer]
				});
          	});
	    }		
	}

	_getCurrentTime() {
      return new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    }
}

export default MessageContainer;