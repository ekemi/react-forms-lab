import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: ''
    };
  }
   
   handleTweet = (event)=>{
     this.setState({
       maxChars: event.target.value
     })
   }
   remainingChars = ()=>{
     return this.props.maxChars - this.state.maxChars.length
   
   }
  render() {
    return (
      <div>

        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.maxChars} onChange={this.handleTweet} />
       
      <div>It remains:{this.remainingChars()}</div>
      </div>
    );
  }
}

export default TwitterMessage;
