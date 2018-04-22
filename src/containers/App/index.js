import React, { Component } from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add';
import FooterButton from '../../components/FooterButton'
import Header from '../../components/Header'
import List from '../../components/List'


import './index.css'

const testData = [
  {
    title: "titulo", 
    description: "descripcion", 
    url: "https://www.venezuelatuya.com/wallpapers/imagenes/montanasatardecer1.jpg", 
    createdAt: new Date()
  },
  {
    title: "titulo", 
    description: "descripcion", 
    url: "https://www.venezuelatuya.com/wallpapers/imagenes/montanasatardecer1.jpg", 
    createdAt: new Date()
  },
  {
    title: "titulo", 
    description: "descripcion", 
    url: "https://www.venezuelatuya.com/wallpapers/imagenes/montanasatardecer1.jpg", 
    createdAt: new Date()
  },
  {
    title: "titulo", 
    description: "descripcion", 
    url: "https://www.venezuelatuya.com/wallpapers/imagenes/montanasatardecer1.jpg", 
    createdAt: new Date()
  },
  {
    title: "titulo", 
    description: "descripcion", 
    url: "https://www.venezuelatuya.com/wallpapers/imagenes/montanasatardecer1.jpg", 
    createdAt: new Date()
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: testData
    }
  }

  render() {
    return (
      <div>
        <Header/>

        <List className="list" items={this.state.items}/>

        <FooterButton>
          <ContentAdd />
        </FooterButton>
      </div>
    )
  }
}

export default App