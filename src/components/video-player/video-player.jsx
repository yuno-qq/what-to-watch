import React, {PureComponent, createRef} from "react"
import PropTypes from "prop-types"


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props)

    this._videoRef = createRef()

    this._videoCanPlayHandler = this._videoCanPlayHandler.bind(this)
    this._videoWaitingHandler = this._videoWaitingHandler.bind(this)
    this._videoTimeUpdateHandler = this._videoTimeUpdateHandler.bind(this)
  }

  render() {
    const {
      imageSrc,
      videoSrc,
      isMooted = true,
      isLooped = true
    } = this.props

    return (
      <video
        onCanPlay={this._videoCanPlayHandler}
        onWaiting={this._videoWaitingHandler}
        onTimeUpdate={this._videoTimeUpdateHandler}
        ref={this._videoRef}
        src={videoSrc}
        poster={imageSrc}
        muted={isMooted}
        loop={isLooped}></video>
    )
  }

  componentDidUpdate() {
    const {
      isPlaying,
      isLoading,
      isLoadInsteadPause = true
    } = this.props

    if (isLoading && isPlaying) {
      return
    }

    if (isPlaying) {
      this._videoRef.current.play()
    } else {
      if (isLoadInsteadPause) {
        this._videoRef.current.load()
      } else {
        this._videoRef.current.pause()
      }
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

  _videoTimeUpdateHandler({currentTime}) {
    const {
      setCurrentTime = () => {}
    } = this.props

    setCurrentTime(currentTime)
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
