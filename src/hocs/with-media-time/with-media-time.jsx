import React, {PureComponent} from "react"


const withMediaTime = (Component) => {
  class WithMediaTime extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        currentTimeByClick: null,
        currentTime: 0,
        duration: null
      }

      this._setCurrentTime = this._setCurrentTime.bind(this)
      this._setCurrentTimeByClick = this._setCurrentTimeByClick.bind(this)
      this._setDuration = this._setDuration.bind(this)
    }

    render() {
      const {
        currentTime,
        duration,
        currentTimeByClick
      } = this.state

      return (
        <Component
          {...this.props}
          currentTime={currentTime}
          currentTimeByClick={currentTimeByClick}
          duration={duration}
          setCurrentTime={this._setCurrentTime}
          setCurrentTimeByClick={this._setCurrentTimeByClick}
          setDuration={this._setDuration}
        />
      )
    }

    _setCurrentTime(currentTime) {
      this.setState({
        currentTime
      })
    }

    _setDuration(duration) {
      this.setState({
        duration
      })
    }

    _setCurrentTimeByClick(currentTimeByClick) {
      this.setState({
        currentTimeByClick
      })
    }
  }

  return WithMediaTime
}


export default withMediaTime
