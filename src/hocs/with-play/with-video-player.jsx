import React, {PureComponent} from 'react'

import VideoPlayer from "../../components/video-player/video-player.jsx"

import withPlayLoad from "../with-play-load/with-play-load.jsx"


const VideoPlayerWrapped = withPlayLoad(VideoPlayer)

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isPlaying: false
      }

      this._TIME_BEFORE_PLAYING = 1000
      this._playingTimeout = null

      this._renderItem = this._renderItem.bind(this)
    }

    render() {
      const {
        isPlaying
      } = this.state

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          renderItem={this._renderItem}
        />
      )
    }

    componentDidUpdate() {
      const {
        isActive,
      } = this.props

      if (isActive) {
        this._playingTimeout = setTimeout(() => {
          this.setState({
            isPlaying: true
          })
        }, this._TIME_BEFORE_PLAYING)

        return
      }

      this.setState({
        isPlaying: false
      }, () => {
        if (this._playingTimeout) {
          clearTimeout(this._playingTimeout)
        }
        this._playingTimeout = null
      })
    }

    _renderItem(movie) {
      const {
        isPlaying
      } = this.state

      return (
        <VideoPlayerWrapped imageSrc={movie.imageSrc}
          previewSrc={movie.previewSrc}
          shouldPlay={isPlaying}/>
      )
    }
  }

  return WithVideoPlayer
}


export default withVideoPlayer
