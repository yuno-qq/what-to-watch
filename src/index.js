import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import {store, Operation} from "./reducer"

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
