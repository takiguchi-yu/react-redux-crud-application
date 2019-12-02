import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// index.js に値を渡せるように export 
// reducer は関数として定義する
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
