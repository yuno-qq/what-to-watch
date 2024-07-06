import React, {PureComponent} from 'react'
import {compose} from "redux"

import VideoPlayer from "../../components/video-player/video-player.jsx"

import withPlayLoad from "../../hocs/with-play-load/with-play-load.jsx"
import withMediaTime from "../../hocs/with-media-time/with-media-time.jsx"


const VideoPlayerWrapped = compose(withMediaTime, withPlayLoad)(VideoPlayer)

const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isPlaying: true,
        isFullWidth: false
      }

      this._renderItem = this._renderItem.bind(this)
      this._setIsPlaying = this._setIsPlaying.bind(this)
      this._getIsPlaying = this._getIsPlaying.bind(this)
    }

    render() {
      const {
        isPlaying
      } = this.state

      return (
        <Component
          {...this.props}
          renderItem={this._renderItem}
          setIsPlaying={this._setIsPlaying}
          isPlaying={isPlaying}
        />
      )
    }

    _renderItem(imageSrc, videoSrc) {
      const {
        isPlaying
      } = this.state

      return (
        <VideoPlayerWrapped
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          isMooted={false}
          isLooped={false}
          isLoadInsteadPause={false}
          shouldPlay={isPlaying}
        />
      )
    }

    _setIsPlaying(flag) {
      this.setState({
        isPlaying: flag
      })
    }

    _getIsPlaying() {
      const {
        isPlaying
      } = this.state

      return isPlaying
    }
  }

  return WithFullVideoPlayer
}


export default withFullVideoPlayer
