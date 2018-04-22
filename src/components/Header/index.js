import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';

import './index.css'

class Header extends Component {
  handleChange = (event, index, value) => {
    let attr = this.props.sort.attr
    let order = this.props.sort.order

    if (value) {
      attr = value
    } else {
      order = this.props.sort.order === 'asc' ? 'desc' : 'asc'
    }

    const sort = { attr, order  }
    this.props.handleChange(sort)
  } 

  render() {
    return (
      <div className="appBar">
        <div>
          <SelectField
            value={this.props.sort.attr}
            onChange={this.handleChange}
          >
            <MenuItem value={"createdAt"} primaryText="Fecha de creacion" />
            <MenuItem value={"title"} primaryText="Titulo" />
          </SelectField>
        </div>
        <div>
          <RaisedButton
            className="buttonOrder"
            secondary={true}
            onClick={this.handleChange}
            icon={
              this.props.sort.order !== 'asc' ? 
                <NavigationArrowUpward/> : <NavigationArrowDownward/>
              }
            />
        </div>
      </div>
    )
  }
}

export default Header