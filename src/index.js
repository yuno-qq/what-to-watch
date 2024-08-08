import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import {store} from "./store/configure-store"
import {Operation} from "./reducers/dynamic/dynamic"

import App from "./containers/app"


const init = () => {
  store.dispatch(Operation.loadMovies())

  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  )
}

init()
