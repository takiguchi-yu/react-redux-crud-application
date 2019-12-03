import React, { Component } from 'react';
// connect で state と actions との関連付けを行う
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

/**
 * prop-types はイミュータブル(変更不可)
 * state は ミュータブル（変更可能）
 */

class EventsIndex extends Component {
  componentDidMount(){
    console.log("コンポーネントのマウント直後に呼ばれます")
    this.props.readEvents()
  }
  componentDidUpdate(){
    console.log("コンポーネントがアップデートされた後に呼ばれます")
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
      <React.Fragment>
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
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect( mapStateToProps, mapDispatchToProps)(EventsIndex)
