import React, {PureComponent} from "react"


const withMediaTime = (Component) => {
  class WithMediaTime extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        currentTime: 0,
        duration: null
      }

      this._setCurrentTime = this._setCurrentTime.bind(this)
      this._setDuration = this._setDuration.bind(this)
    }

    render() {
      const {
        currentTime,
        duration
      } = this.state

      return (
        <Component
          {...this.props}
          currentTime={currentTime}
          duration={duration}
          setCurrentTime={this._setCurrentTime}
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
  }

  return WithMediaTime
}


export default withMediaTime
