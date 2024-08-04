import {connect} from "react-redux"

import App from "../components/app/app.jsx"


const mapStateToProps = ({isFullVideoOpened, hasServerError, movies}, ownProps) => {
  return Object.assign({}, ownProps, {
    isFullVideoOpened,
    hasServerError,
    movies
  })
}


export default connect(mapStateToProps)(App)
