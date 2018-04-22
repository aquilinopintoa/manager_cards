import React, { Component } from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog';
import FooterButton from '../../components/FooterButton'
import FormCard from  '../../components/FormCard'
import Header from '../../components/Header'
import List from '../../components/List'

import {clone, remove} from 'lodash'


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
      },
      action: '',
      cardSelected: null
    }
  }

  handleOpen = (action, id = undefined) => {
    let cardSelected = null 
    
    if (id !== undefined) {
      cardSelected = this.state.cards.find((card) => {return card.id === id})
    }

    this.setState({
      openCreateCard: true,
      action,
      cardSelected
    });
  };

  handleClose = () => {
    this.setState({openCreateCard: false});
  };

  handleUpdateCards = (action, card) => {
    const prevCards = clone(this.state.cards)
    switch(action){
      case 'create':
        card.id = prevCards.length
        prevCards.push(card)
        break
      case 'edit':
        // solucion no elegantee
        const cardTarget = prevCards.find((iter) => iter.id === card.id) 
        cardTarget.title = card.title
        cardTarget.description = card.description
        cardTarget.url = card.url
        break
      case 'delete':
        remove(prevCards, (iter) => {return iter.id === card.id})
        break
      default:
        console.log('action undefined')
    }

    // update cards from localstorage <pass to common files>
    localStorage.setItem('cards', JSON.stringify(prevCards))

    this.setState({
      cards: prevCards
    })

    this.handleClose()
  }

  handleChangeSorting = (sort) => {
    this.setState({sort})
  }

  handleActionCard = (action, id) => {
    switch(action){
      case 'edit':
        this.handleOpen('edit', id)
        break
      case 'delete':
        this.handleUpdateCards('delete', {id})
        break
      default: 
        console.log('action undefined')
    }
  }

  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChangeSorting}
          sort={this.state.sort}/>

        <List 
          items={this.state.cards} 
          sorting={this.state.sort}
          handleAction={this.handleActionCard}/>
        
        <FooterButton action="create" handleAction={this.handleOpen}>
          <ContentAdd className="floatButton"/>
        </FooterButton>

        <Dialog
          contentClassName="contentModal"
          modal={false}
          open={this.state.openCreateCard}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <FormCard 
            cardSelected={this.state.cardSelected} 
            action={this.state.action} 
            onSubmit={this.handleUpdateCards}/>
        </Dialog>
      </div>
    )
  }
}

export default App