import React, {PureComponent} from "react"


class VideoControls extends PureComponent {
  constructor(props) {
    super(props)

    this._playBtnClickHandler = this._playBtnClickHandler.bind(this)
    this._screenBtnClickHandler = this._screenBtnClickHandler.bind(this)

    this._progressBarClickHandler = this._progressBarClickHandler.bind(this)
  }

  static _secToHHMMSS(sec) {
    sec = Math.ceil(sec)

    let hours = Math.floor(sec / 3600)
    let minutes = Math.floor((sec - (hours * 3600)) / 60)
    let seconds = sec - (hours * 3600) - (minutes * 60)

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    let result = `${minutes}:${seconds}`

    if (hours > 0) {
      result = `${hours}:${result}`
    }

    return result
  }

  render() {
    const {
      duration,
      currentTime,
      isPlaying
    } = this.props

    const hasDuration = duration !== null
    const currentTimeFormattedValue = hasDuration ? currentTime / duration * 100 : 0
    const timeFormattedValue = hasDuration ? VideoControls._secToHHMMSS(duration - currentTime) : `--:--`

    return (
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress onClick={this._progressBarClickHandler} className="player__progress" value={currentTimeFormattedValue} max="100"></progress>
            <div className="player__toggler" style={{left: `${currentTimeFormattedValue}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeFormattedValue}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={this._playBtnClickHandler} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isPlaying ? (<use xlinkHref="#pause"></use>)
                : (<use xlinkHref="#play-s"></use>)}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button onClick={this._screenBtnClickHandler} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    )
  }

  _progressBarClickHandler({nativeEvent, currentTarget}) {
    const {
      offsetX
    } = nativeEvent

    const {
      clientWidth
    } = currentTarget

    const {
      setCurrentTimeByClick,
      duration
    } = this.props

    if (duration === null) {
      return
    }

    setCurrentTimeByClick(offsetX / clientWidth * duration)
  }

  _playBtnClickHandler() {
    const {
      isPlaying,
      setIsPlaying = () => {}
    } = this.props

    setIsPlaying(!isPlaying)
  }

  _screenBtnClickHandler() {
    const {
      isFullScreen,
      setIsFullScreen = () => {}
    } = this.props

    setIsFullScreen(!isFullScreen)
  }
}


export default VideoControls
