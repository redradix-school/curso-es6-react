import React from 'react'
import { connect } from 'react-redux'
import { citySearch } from 'modules/weather/actionCreators'

class CitySearchForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    const { dispatch } = this.props
    const value = this.input.value
    this.input.value = ''
    dispatch(citySearch(value))
  }
  render() {
    return (
      <div className="widget-field">
        <input type="text" placeholder="Ciudad"
               ref={(input) => this.input = input } />
        <button className="button" onClick={this.handleSubmit}>Buscar</button>
      </div>
    )
  }
}

export default connect()(CitySearchForm)
