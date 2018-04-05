import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './style/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  getTime = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    return  h + ":" + m;
  }

  handleChatANewMessage = (text) => {
    var date = this.getTime();
    this.setState({
      messages: [...this.state.messages, { me: true ,other:false, body: text , time: date }],
    })
  }

  handleChatBNewMessage = (text) => {
    var date = this.getTime();
    this.setState({
      messages: [...this.state.messages, { me: false ,other:true, body: text, time: date}],
    })
  }

  render() {
    return (
      <div className="App">
        <div className="chatContainer chatA">
          <h1>Chat A</h1>
          <MessageList messages={this.state.messages} />
          <MessageForm onMessageSend={this.handleChatANewMessage} />
        </div>
        <div className="chatContainer chatB">
          <h1>Chat B</h1>
          <MessageList messages={this.state.messages} />
          <MessageForm onMessageSend={this.handleChatBNewMessage} />
        </div>
      </div>
    )
  }
}

export default App
