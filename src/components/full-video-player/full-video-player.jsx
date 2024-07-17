import React, {PureComponent} from "react"

import VideoControls from "../video-controls/video-controls.jsx"

import withDragging from "../../hocs/with-dragging/with-dragging.jsx"


const VideoControlsWrapped = withDragging(VideoControls)

class FullVideoPlayer extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      movie,
      renderItem,
      isPlaying,
      currentTime,
      duration,
      setCurrentTimeByUser,
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

        <button type="button" className="player__exit">Exit</button>

        <VideoControlsWrapped
          name={name}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          setCurrentTimeByUser={setCurrentTimeByUser}
          setIsPlaying={setIsPlaying}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      </div>
    )
  }
}


export default FullVideoPlayer
