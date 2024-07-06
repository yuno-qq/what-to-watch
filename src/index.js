import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import {store} from "./reducer"

import App from "./containers/app"


const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  )
}

init()
