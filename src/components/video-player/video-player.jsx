import React, {PureComponent, createRef} from "react"
import PropTypes from "prop-types"


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props)

    this._videoRef = createRef()

    this._videoCanPlayHandler = this._videoCanPlayHandler.bind(this)
    this._videoWaitingHandler = this._videoWaitingHandler.bind(this)
  }

  render() {
    const {
      imageSrc,
      previewSrc
    } = this.props

    return (
      <video
        onCanPlay={this._videoCanPlayHandler}
        onWaiting={this._videoWaitingHandler}
        ref={this._videoRef}
        src={previewSrc}
        poster={imageSrc}
        muted
        loop></video>
    )
  }

  componentDidUpdate() {
    const {
      isPlaying,
      isLoading
    } = this.props

    if (isLoading && isPlaying) {
      return
    }

    if (isPlaying) {
      this._videoRef.current.play()
    } else {
      this._videoRef.current.load()
    }
  }

  _videoCanPlayHandler() {
    const {
      setIsLoading = () => {}
    } = this.props

    setIsLoading(false)
  }

  _videoWaitingHandler() {
    const {
      setIsLoading = () => {}
    } = this.props

    setIsLoading(true)
  }
}

VideoPlayer.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  previewSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired
}


export default VideoPlayer
