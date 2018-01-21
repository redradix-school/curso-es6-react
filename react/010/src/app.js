import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'components/home'
import Timer from 'components/timer'

export default (props) => {
  return <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/timer/:time" component={Timer} />
    </Switch>
  </Router>
}
