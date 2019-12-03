// Reducer は Action の状態(state)定義をする
// index.js では、アプリケーションに存在する全ての reducer を統合する

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
