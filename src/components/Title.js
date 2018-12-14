import React, {Component} from 'react';

class Title extends Component {
	render() {
		return (
			<div className="chat-header clearfix">
                <img src="https://sc01.alicdn.com/kf/HTB1dUmcCFOWBuNjy0Fiq6xFxVXaT/New-products-dance-sing-remote-control-robot.jpg_50x50.jpg" alt="avatar" />
                <div className="chat-about">
                	<div className="chat-with">Chat with Prediction Robot</div>
                	<div className="chat-num-messages">Ask anything</div>
                </div>
                <i className="fa fa-star"></i>
            </div>
		);
	}
}

export default Title;