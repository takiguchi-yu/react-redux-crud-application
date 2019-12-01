import React, { Component } from 'react';

/**
 * prop-types はイミュータブル(変更不可)
 * state は ミュータブル（変更可能）
 */

function App() {
  return <Counter></Counter>
}

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }  

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }  

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count: { this.state.count } </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
