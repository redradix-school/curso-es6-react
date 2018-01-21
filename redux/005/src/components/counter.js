import React from 'react'
import { connect } from 'react-redux'
import { increment } from 'modules/counter/actionCreators'

class Counter extends React.Component {
  render() {
    return <div>
      <h1>{this.props.value}</h1>
      <button onClick={() => this.props.increment(2)}>
        Increment by 2
      </button>
    </div>
  }
}

const mapStateToProps = state => ({ value: state.counter })
const mapDispatchToProps = dispatch => ({
  increment: (n) => dispatch(increment(n))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

