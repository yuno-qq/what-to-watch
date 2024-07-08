import React, {PureComponent} from "react"

import VideoControls from "../video-controls/video-controls.jsx"


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

        <button type="button" className="player__exit">Exit</button>

        <VideoControls
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
}


export default FullVideoPlayer
