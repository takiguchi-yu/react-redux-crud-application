// Reducer は Action の状態(state)定義をする
// index.js では、アプリケーションに存在する全ての reducer を統合する

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })

// 通常は以下のように複数定義することの方が多い
// export default combineReducers({ foo, bar, baz })
