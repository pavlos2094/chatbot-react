import React, {Component} from 'react';

class SendMessageForm extends Component {
    
    constructor(props){
        super(props);
        this._handleInputChange = this._handleInputChange.bind(this);
    }
    componentDidMount() {
        this.refs.textArea.addEventListener('keypress', function (e) {
            if ((e.which || e.keyCode) === 13) { // 13 is enter
              this.props.onInputChange(this.refs.textArea.value);
              this.refs.textArea.value = '';
            }
        }.bind(this), false);
    }
	render() {
		return (
		<div className="chat-message clearfix">
            <textarea ref="textArea" name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="2"></textarea>
                    
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            
            <button onClick={this._handleInputChange}>Send</button>

        </div>
		);
	}

    _handleInputChange(e) {
        this.props.onInputChange(this.refs.textArea.value);
        this.refs.textArea.value = '';
    }
}

export default SendMessageForm;