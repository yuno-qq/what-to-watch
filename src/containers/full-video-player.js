import {connect} from "react-redux"

import {ActionCreator} from "../reducer"

import FullVideoPlayer from "../components/full-video-player/full-video-player.jsx"


const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onExitBtnClick: () => {
      dispatch(ActionCreator.toggleFullVideo(false))
    }
  })
}


export default connect(undefined, mapDispatchToProps)(FullVideoPlayer)
