import React, {PureComponent, createRef} from "react"
import PropTypes from "prop-types"


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      isPlaying: false
    }

    this._videoRef = createRef()
  }

  static getDerivedStateFromProps(props) {
    const {
      shouldPlay
    } = props

    if (typeof shouldPlay === `undefined`) {
      return null
    }

    return {
      isPlaying: shouldPlay
    }
  }

  render() {
    const {
      imageSrc,
      previewSrc
    } = this.props

    return (
      <video
        onCanPlay={() => this._videoCanPlayHandler()}
        onWaiting={() => this._videoWaitingHandler()}
        ref={this._videoRef}
        src={previewSrc}
        poster={imageSrc}
        muted
        loop></video>
    )
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      return
    }

    if (this.state.isPlaying) {
      this._videoRef.current.play()
    } else {
      this._videoRef.current.load()
    }
  }

  _videoCanPlayHandler() {
    this.setState({
      isLoading: false
    })
  }

  _videoWaitingHandler() {
    this.setState({
      isLoading: true
    })
  }
}


export default VideoPlayer
