import React, {Component} from 'react';
import {hot} from "react-hot-loader";
import MessageContainer from "../containers/MessageContainer";

class App extends Component {
	render() {
		return (
			<div className="container clearfix">
				<MessageContainer />
			</div>
		);
	}
}

export default hot(module)(App);