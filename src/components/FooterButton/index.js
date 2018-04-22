import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import './index.css'

class FooterButton extends Component {
  render() {
    return (
      <div className="button">
        <FloatingActionButton {...this.props}>
          {this.props.children}
        </FloatingActionButton>
      </div>
    )
  }
}

export default FooterButton