import {connect} from "react-redux"

import {ActionCreator} from "../reducers/static/static"

import PlayBtn from "../components/play-btn/play-btn.jsx"


const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onClick: ()=> {
      dispatch(ActionCreator.toggleFullVideo(true))
    }
  })
}


export default connect(undefined, mapDispatchToProps)(PlayBtn)
