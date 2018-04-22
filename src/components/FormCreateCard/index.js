import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {clone, isEmpty} from 'lodash'

import ValidateInput from '../../common/ValidateInput'
import './index.css'

const validations = {
  title: ['NOTNULL'],
  description: ['NOTNULL'],
  url: []
}

class FormCreateCard extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      errors: {},
      cardData: { 
        title: '',
        description: '',
        url: ''
      }
    }
  }

  save = (value, field, context) => {
    const statePrev = clone(this.state)
    statePrev.errors[field] = ValidateInput(validations[field], value)

    if (!statePrev.errors[field]) {
      delete statePrev.errors[field]
    }

    statePrev.cardData[field] = value
    this.setState(statePrev)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const statePrev = clone(this.state)

    Object.keys(validations).forEach(function(key){
      statePrev.errors[key] = ValidateInput(validations[key], statePrev.cardData[key])
      if (!statePrev.errors[key]) {
        delete statePrev.errors[key]
      }
    })

    if (!isEmpty(statePrev.errors)) {
      this.setState(statePrev)
      return
    }

    statePrev.cardData.createdAt = new Date()
    this.props.onSubmit(statePrev.cardData)
  }

  render() {
    return (
      <div className="contentForm">
        <div className="title">
          Nueva tarjeta
        </div>
        <div style={{display:'flex'}}>
          <div >
            <TextField
              className="input"
              hintText="Titulo"
              errorText={this.state.errors.title}
              floatingLabelText="Titulo"
              onChange={(event, value) => this.save(value,"title")}
            />
            <TextField
              className="input"
              hintText="Descripcion"
              floatingLabelText="Descripcion"
              errorText={this.state.errors.description}
              onChange={(event, value) => this.save(value,"description")}
            />
            <TextField
              className="input"
              hintText="Url"
              floatingLabelText="Url"
              errorText={this.state.errors.url}
              onChange={(event, value) => this.save(value,"url")}
            />
            <div className="buttonForm">
              <RaisedButton 
                label="Añadir"
                labelColor="white"
                backgroundColor="red"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormCreateCard