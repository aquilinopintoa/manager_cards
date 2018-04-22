import React, { Component } from 'react'
import {Card, CardMedia, CardText, CardTitle} from 'material-ui/Card';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: this.props.info.url || "noImagen.png"
    }
  }

  handleErrorImage = () => {
    this.setState({
      url: "noImagen.png"
    })
  }

  render() {
    return (
      <Card zDepth={5}>
        <CardMedia
          overlay={<CardTitle title={this.props.info.title}/>}
        >
          <img 
            height={250} 
            src={this.state.url} 
            alt="" 
            onError={this.handleErrorImage} />
        </CardMedia>
        <CardText>
          {this.props.info.descripcion}
        </CardText>
      </Card>
    )
  }
}

export default App