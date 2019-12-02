import React, { Component } from 'react';
// connect で state と actions との関連付けを行う
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

/**
 * prop-types はイミュータブル(変更不可)
 * state は ミュータブル（変更可能）
 */

class EventsIndex extends Component {
  // Component がマウントされた直後に1回だけ呼ばれるのでDOMに関わる初期化処理に使う
  componentDidMount(){
    console.log("コンポーネントのマウント直後に呼ばれます")
    this.props.readEvents()
  }
  componentDidUpdate(){
    console.log("コンポーネントがアップデートされた後に呼ばれます")
  }
  componentWillUnmount(){
    console.log("コンポーネントがアンマウントされる直前に呼ばれます")
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>BOdy</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

// const mapDispatchToProps = dispatch => ({ 
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })
// 上記の記述法は以下のように短縮することも可能
const mapDispatchToProps = ({ readEvents })

export default connect( mapStateToProps, mapDispatchToProps)(EventsIndex)
