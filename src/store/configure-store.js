import {createStore, applyMiddleware, compose} from "redux"
import {withExtraArgument} from "redux-thunk"

import reducer from "../reducers"
import createAPI from "../api"


const api = createAPI((...args) => store.dispatch(...args))

const devToolsFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : (fn) => fn

const store = createStore(
    reducer,
    compose(applyMiddleware(withExtraArgument(api)), devToolsFn)
)


export {store, api}
