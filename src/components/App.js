import React, {Component} from 'react';
import {hot} from "react-hot-loader";

import MessageList from "./MessageList";
import Title from "./Title";

class App extends Component {
	constructor() {
		super();
		const DUMMY_DATA = [
	 		{
	    		senderId: "perborgen",
	    		text: "who'll win?"
	  		},
	  		{
	   			 senderId: "janedoe",
	   			 text: "who'll win?"
	  		}
		]
		this.state = {
			messages: DUMMY_DATA
		}
	}

	render() {
		return (
			<div>
				<Title />
				<MessageList messages={this.state.messages}/>
			</div>
		);
	}
}

export default hot(module)(App);