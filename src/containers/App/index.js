import React, { Component } from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog';
import FooterButton from '../../components/FooterButton'
import FormCreateCard from  '../../components/FormCreateCard'
import Header from '../../components/Header'
import List from '../../components/List'


import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      openCreateCard: false,
    }
  }

  handleOpen = () => {
    this.setState({openCreateCard: true});
  };

  handleClose = () => {
    this.setState({openCreateCard: false});
  };

  handleCreateCard = (card) => {
    this.state.items.push(card)
    this.setState({
      items: this.state.items
    })
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChangeSorting}
          sort={this.state.sort}/>

        <List items={this.state.items} sorting={this.state.sort}/>
        
        <FooterButton onClick={this.handleOpen}>
          <ContentAdd />
        </FooterButton>

        <Dialog
          contentClassName="contentModal"
          modal={false}
          open={this.state.openCreateCard}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <FormCreateCard onSubmit={this.handleCreateCard}/>
        </Dialog>
      </div>
    )
  }
}

export default App