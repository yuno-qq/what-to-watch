import {connect} from "react-redux"

import App from "../components/app/app.jsx"


const mapStateToProps = ({dynamic: {hasServerError, movies}, static: {isFullVideoOpened}}, ownProps) => {
  return Object.assign({}, ownProps, {
    isFullVideoOpened,
    hasServerError,
    movies
  })
}


export default connect(mapStateToProps)(App)
