import _ from 'lodash'
import { 
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from '../actions'

// index.js に値を渡せるように export 
// reducer は関数として定義する
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case DELETE_EVENT:
      delete events[action.id]
      // 新しいメモリ空間上に更新後のオブジェクトを返却
      return { ...events }   // 「...」スプレッド演算子（スプレッド構文）
    default:
      return events
  }
}
