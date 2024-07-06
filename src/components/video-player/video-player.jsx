import React, {PureComponent, createRef} from "react"
import PropTypes from "prop-types"


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props)

    this._videoRef = createRef()

    this._videoCanPlayHandler = this._videoCanPlayHandler.bind(this)
    this._videoWaitingHandler = this._videoWaitingHandler.bind(this)
    this._videoTimeUpdateHandler = this._videoTimeUpdateHandler.bind(this)
    this._fullScreenChangeHandler = this._fullScreenChangeHandler.bind(this)
    this._videoPlayHandler = this._videoPlayHandler.bind(this)
    this._videoPauseHandler = this._videoPauseHandler.bind(this)
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
        onPlay={this._videoPlayHandler}
        onPause={this._videoPauseHandler}
        ref={this._videoRef}
        src={videoSrc}
        poster={imageSrc}
        muted={isMooted}
        loop={isLooped}></video>
    )
  }

  componentDidUpdate(prevProps) {
    const {
      isPlaying,
      isLoading,
      isFullScreen = false,
      isLoadInsteadPause = true
    } = this.props

    console.log(`isPlaying: `, isPlaying)

    if (!prevProps.isFullScreen && isFullScreen) {
      this._videoRef.current.requestFullscreen()
      document.addEventListener(`fullscreenchange`, this._fullScreenChangeHandler)
    }

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

  _videoPlayHandler() {
    const {
      setIsPlaying = () => {},
    } = this.props

    setIsPlaying(true)
  }

  _videoPauseHandler() {
    const {
      setIsPlaying = () => {},
    } = this.props

    setIsPlaying(false)
  }

  _fullScreenChangeHandler() {
    const {
      isFullScreen,
      setIsFullScreen = () => {}
    } = this.props

    document.removeEventListener(`fullscreenchange`, this._fullScreenChangeHandler)
    setIsFullScreen(!isFullScreen)
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
