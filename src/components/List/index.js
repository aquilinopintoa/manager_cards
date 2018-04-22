import React, { Component } from 'react'
import Item from '../../components/Item'
import './index.css'

class List extends Component {
  getItems () {
    const itemsOrdered = this.props.items.sort((iter, iter1) => { 
      if (this.props.sorting.order === 'asc') { 
        return iter[this.props.sorting.attr] < iter1[this.props.sorting.attr] ? -1 : 1 
      } else { 
        return iter[this.props.sorting.attr] < iter1[this.props.sorting.attr] ? 1 : -1 
      }  
    }) 
    return itemsOrdered.map( (item, index) =>  
      <div  
        key={index.toString()}
        className="col-xs-12 col-sm-6 col-lg-4 m-b-15 item">
        <Item
          index={index}
          handleAction={this.props.handleAction}
          info={item}/>
      </div>
    )
  }

  render() {
    return (
      <div className="list">
        {this.getItems()}
      </div>
    )
  }
}

export default List