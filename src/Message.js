import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames"
import './style/Message.css'

class Message extends Component {
  static propTypes = {
    me: PropTypes.bool,
    other: PropTypes.bool,
    body: PropTypes.string.isRequired,
    time: PropTypes.string
  }

  render() {
     const classes = classNames('Message', {
      other: this.props.other,
      me: this.props.me
    })
    return (

      <div className={classes}>
        {this.props.body}<div className="time">{this.props.time}</div>
      </div>

    )
  }
}

export default Message
