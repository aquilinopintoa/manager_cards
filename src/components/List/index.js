import React, { Component } from 'react'
import Item from '../../components/Item'
import './index.css'

class List extends Component {
  getItems () {
    console.log(this.props.items)
    const items= this.props.items
    return items.map( (item, index) => 
      <div  
        key={index.toString()}
        className="col-xs-12 col-sm-6 col-lg-4 m-b-15 item">
        <Item
          index={index}
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