import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import './index.css'

class FooterButton extends Component {
  handleOpen = (e) => {
    e.preventDefault()
    this.props.handleAction(this.props.action)
  }

  render() {
    return (
      <div className="button">
        <FloatingActionButton backgroundColor="red" onClick={this.handleOpen}>
          {this.props.children}
        </FloatingActionButton>
      </div>
    )
  }
}

export default FooterButton