import React, { Component } from 'react'

export default props => (
  <div className="widget-banner">
    <h1 className="widget-title">{props.children}</h1>
    <span className="icon icon-home"/>
  </div>
)

