// まず action を読み込む
import { INCREMENT, DECREMENT } from '../actions'

// 状態(state)の定義
const initialState = { value: 0 }

// index.js に値を渡せるように export 
// reducer は関数として定義する
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value +1 }
    case DECREMENT:
      return { value: state.value -1 }
    default:
      return state
  }
}
