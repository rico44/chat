import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/MessageForm.css'

class MessageForm extends Component {
  static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.input.focus()
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onMessageSend(this.input.value)
    this.input.value = ""
  }

  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleFormSubmit}>
        <div className="input-container">
          <input
            type="text"
            ref={(node) => (this.input = node)}
            placeholder="Rédiger un message…"
          />
        </div>
        <div className="button-container">
          <button type="submit">
            >
          </button>
        </div>
      </form>
    )
  }
}

export default MessageForm
