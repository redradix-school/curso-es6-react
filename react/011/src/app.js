import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from 'components/user-list'
import UserCreate from 'components/user-create'
import UserEdit from 'components/user-edit'
import UserDelete from 'components/user-delete'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { users: [
      {
        avatar: 'http://icons.veryicon.com/ico/Movie%20%26%20TV/Simpsons%204/Homer%20Simpson%2004%20Happy.ico',
        name: 'Homer',
        surname: 'Simpson',
        birthdate: '01/02/1970',
        role: 'Senior Developer'
      },
      {
        avatar: 'https://pm1.narvii.com/6321/e3d7c35b939a353f187ed3dfcaaa4de6d1b942a4_128.jpg',
        name: 'Marge',
        surname: 'Simpson',
        birthdate: '11/12/1972',
        role: 'CEO'
      },
      {
        avatar: 'https://pm1.narvii.com/6536/83bb8405e9f3a5485b9d94b5b6ad81d3d563b1f4_128.jpg',
        name: 'Bart',
        surname: 'Simpson',
        birthdate: '21/07/1992',
        role: 'Junior Developer'
      }
    ] }
    this.updateUsers = this.updateUsers.bind(this)
  }
  updateUsers(users) {
    this.setState({ users })
  }
  render() {
    const { users } = this.state
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <UserList {...props} users={users} update={this.updateUsers} />} />
          <Route path="/user/create" render={(props) => <UserCreate {...props} users={users} update={this.updateUsers} />} />
          <Route exact path="/user/:index" render={(props) => <UserEdit {...props} users={users} update={this.updateUsers} />} />
          <Route path="/user/:index/delete" render={(props) => <UserDelete {...props} users={users} update={this.updateUsers} />} />
        </Switch>
      </Router>
    )
  }
}
