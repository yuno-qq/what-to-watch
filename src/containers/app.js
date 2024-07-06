import {connect} from "react-redux"

import App from "../components/app/app.jsx"


const mapStateToProps = ({isFullVideoOpened}, ownProps) => {
  return Object.assign({}, ownProps, {
    isFullVideoOpened
  })
}


export default connect(mapStateToProps)(App)
