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

    let cards =  []
    // get cards from localstorage <pass to common files>
    const ls = localStorage.getItem('cards')
    if (ls) {
      cards = JSON.parse(ls)
    }

    this.state = {
      cards,
      openCreateCard: false,
      sort: {
        attr: 'createdAt',
        order: 'asc'
      }
    }
  }

  handleOpen = () => {
    this.setState({openCreateCard: true});
  };

  handleClose = () => {
    this.setState({openCreateCard: false});
  };

  handleCreateCard = (card) => {
    this.state.cards.push(card)

    // update cards from localstorage <pass to common files>
    localStorage.setItem('cards', JSON.stringify(this.state.cards))

    this.setState({
      cards: this.state.cards
    })

    this.handleClose()
  }

  handleChangeSorting = (sort) => {
    this.setState({sort})
  }

  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChangeSorting}
          sort={this.state.sort}/>

        <List 
          items={this.state.cards} 
          sorting={this.state.sort}/>
        
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