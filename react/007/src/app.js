import React from 'react'
import CreateTaskForm from 'components/create-task-form'
import TaskList from 'components/task-list'
import Filters from 'components/filters'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {todos: [], filter: 'all' }
    this.updateTodos = this.updateTodos.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }
  updateTodos(todos) {
    this.setState({ todos })
  }
  updateFilter(filter) {
    this.setState({ filter })
  }
  render() {
    const { todos, filter } = this.state
    return (
      <div>
        <CreateTaskForm todos={todos} update={this.updateTodos} />
        <TaskList todos={todos} update={this.updateTodos} filter={filter} />
        <Filters filter={filter} updateFilter={this.updateFilter} />
      </div>
    )
  }
}
