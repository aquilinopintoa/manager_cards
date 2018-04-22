import React, { Component } from 'react'
import {Card, CardMedia, CardText, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: this.props.info.url || "noImagen.png",
      over: false
    }
  }

  handleErrorImage = (e) => {
    console.log(e)
    this.refs.image.src = "noImagen.png"
  }

  onMouseOver = (e) => {
    e.preventDefault()
    this.setState(
      {over: true}
    )
  }

  onMouseOut= (e) => {
    e.preventDefault()
    this.setState(
      {over: false}
    )
  }

  render() {
    return (
      <Card zDepth={5} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
        <CardMedia
          overlay={<CardTitle title={this.props.info.title}/>}
        >
          <img
            ref="image" 
            height={250} 
            src={this.props.info.url || "noImagen.png"} 
            alt="" 
            onError={this.handleErrorImage} />
        </CardMedia>
        <CardText>
          {this.props.info.description}
        </CardText>
            <CardActions style={{display: 'flex', justifyContent:'center', height:40, visibility: this.state.over ? 'visible' : 'hidden'}}>
              <FlatButton 
                label="Editar" 
                primary
                onClick={() => {this.props.handleAction('edit', this.props.info.id)}}/>
              <FlatButton 
                label="Eliminar" 
                secondary
                onClick={() => {this.props.handleAction('delete', this.props.info.id)}}/>
            </CardActions>
      </Card>
    )
  }
}

export default Item