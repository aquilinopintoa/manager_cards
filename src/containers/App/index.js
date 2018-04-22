import React, { Component } from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add';
import FooterButton from '../../components/FooterButton'
import Header from '../../components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        <Header/>
        
        <FooterButton>
          <ContentAdd />
        </FooterButton>
      </div>
    )
  }
}

export default App