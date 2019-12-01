import React, { Component } from 'react';
// connect で state と actions との関連付けを行う
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

/**
 * prop-types はイミュータブル(変更不可)
 * state は ミュータブル（変更可能）
 */

class App extends Component {
  // 以下のコンストラクタは reducer で実施しているため不要
  // constructor(props) {
  //   super(props)
  //   console.log(this.state)
  //   this.state = { count: 0 }
  // }

  // 以下のインクリ・デクリは actoin creator で実施しているため不要
  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }

  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value { props.value } </div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

// const mapDispatchToProps = dispatch => ({ 
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })
// 上記の記述法は以下のように短縮することも可能
const mapDispatchToProps = ({ increment, decrement })

export default connect( mapStateToProps, mapDispatchToProps)(App)
