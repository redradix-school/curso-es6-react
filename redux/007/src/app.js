import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Banner from 'components/banner'
import CitySearchForm from 'components/city-search-form'
import CityWeatherList from 'components/city-weather-list'

export default props => (
  <Provider store={props.store}>
    <div className="main-content wrapper">
      <div className="widget">
        <div className="widget-content">
          <Banner>Introduce la ciudad</Banner>
          <CitySearchForm />
          <CityWeatherList />
        </div>
      </div>
    </div>
  </Provider>
)

