import React, {PureComponent} from 'react'
import {compose} from "redux"
import PropTypes from "prop-types"

import VideoPlayer from "../../components/video-player/video-player.jsx"

import withPlayLoad from "../../hocs/with-play-load/with-play-load.jsx"


const VideoPlayerWrapped = compose(withPlayLoad)(VideoPlayer)

const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isPlaying: true,
        isFullScreen: false
      }

      this._renderItem = this._renderItem.bind(this)
      this._setIsPlaying = this._setIsPlaying.bind(this)
      this._setIsFullScreen = this._setIsFullScreen.bind(this)
    }

    render() {
      const {
        isPlaying,
        isFullScreen,
      } = this.state

      return (
        <Component
          {...this.props}
          renderItem={this._renderItem}
          isPlaying={isPlaying}
          isFullScreen={isFullScreen}
          setIsPlaying={this._setIsPlaying}
          setIsFullScreen={this._setIsFullScreen}
        />
      )
    }

    _renderItem(imageSrc, videoSrc) {
      const {
        isPlaying,
        isFullScreen,
      } = this.state

      const {
        setDuration,
        setCurrentTime,
        currentTimeByClick
      } = this.props

      return (
        <VideoPlayerWrapped
          cssMod={`player__video`}
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          isMooted={false}
          isLooped={false}
          isLoadInsteadPause={false}
          shouldPlay={isPlaying}
          setIsPlaying={this._setIsPlaying}
          isFullScreen={isFullScreen}
          setIsFullScreen={this._setIsFullScreen}
          setDuration={setDuration}
          setCurrentTime={setCurrentTime}
          currentTimeByClick={currentTimeByClick}
        />
      )
    }

    _setIsPlaying(flag) {
      this.setState({
        isPlaying: flag
      })
    }

    _setIsFullScreen(flag) {
      this.setState({
        isFullScreen: flag
      })
    }
  }

  WithFullVideoPlayer.propTypes = {
    setDuration: PropTypes.func,
    setCurrentTime: PropTypes.func,
    currentTimeByClick: PropTypes.number,
  }

  return WithFullVideoPlayer
}


export default withFullVideoPlayer
