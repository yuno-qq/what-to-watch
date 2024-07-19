import React, {PureComponent} from "react"

import VideoControls from "../video-controls/video-controls.jsx"

import withDragging from "../../hocs/with-dragging/with-dragging.jsx"
import PropTypes from "prop-types"


const VideoControlsWrapped = withDragging(VideoControls)

class FullVideoPlayer extends PureComponent {
  constructor(props) {
    super(props)

    this._exitBtnClickHandler = this._exitBtnClickHandler.bind(this)
  }

  render() {
    const {
      movie,
      renderItem,
      isPlaying,
      currentTime,
      duration,
      setCurrentTimeByClick,
      setIsPlaying,
      setIsFullScreen,
      isFullScreen
    } = this.props

    const {
      name,
      imageSrc,
      videoSrc,
    } = movie

    return (
      <div className="player">
        {renderItem(imageSrc, videoSrc)}

        <button type="button"
          className="player__exit"
          onClick={this._exitBtnClickHandler}>Exit</button>

        <VideoControlsWrapped
          name={name}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          setCurrentTimeByClick={setCurrentTimeByClick}
          setIsPlaying={setIsPlaying}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      </div>
    )
  }

  _exitBtnClickHandler() {
    const {
      onExitBtnClick
    } = this.props

    onExitBtnClick()
  }
}

FullVideoPlayer.propTypes = {
  movie: PropTypes.exact({
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
  }).isRequired,
  renderItem: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  setCurrentTimeByClick: PropTypes.func,
  setIsFullScreen: PropTypes.func,
  setIsPlaying: PropTypes.func,
  isFullScreen: PropTypes.bool,
  onExitBtnClick: PropTypes.func
}


export default FullVideoPlayer
