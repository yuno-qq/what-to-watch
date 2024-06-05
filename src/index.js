import React from "react"
import ReactDOM from "react-dom"

import movies from "./mocks/movies.jsx"

import App from "./components/app/app.jsx"


const init = () => {
  ReactDOM.render(
      <App movies={movies}/>,
      document.querySelector(`#root`)
  )
}

init()
