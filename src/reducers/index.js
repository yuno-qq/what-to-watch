import {combineReducers} from "redux"

import {reducer as staticReducer} from "./static"
import {reducer as dynamicReducer} from "./dynamic"


const reducer = combineReducers({
  static: staticReducer,
  dynamic: dynamicReducer
})


export default reducer
