import React from 'react'
import { connect } from 'react-redux'

class CityWeatherList extends React.Component {
  render() {
    const { weather } = this.props
    const { city, country } = weather ? weather.query.results.channel.location : {}
    const { sunrise, sunset } = weather ? weather.query.results.channel.astronomy : {}
    return (
      <div class="widget-box">
        { this.props.loading && <h3 className="title">Loading...</h3>}
        { weather && <h3 class="title">{city}, {country}</h3>}
        { weather && (
          <div className="box-item">
            <span>Sunrise: {sunrise}</span>
            <span>Sunset: {sunset}</span>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.weather.loading,
  city: state.weather.city,
  weather: state.weather.weather
})

export default connect(mapStateToProps)(CityWeatherList)
