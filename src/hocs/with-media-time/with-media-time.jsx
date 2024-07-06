import React, {PureComponent} from "react"


const withMediaTime = (Component) => {
  class WithMediaTime extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        currentTime: 0
      }

      this._setCurrentTime = this._setCurrentTime.bind(this)
    }

    render() {
      return (
        <Component
          {...this.props}
          setCurrentTime={this._setCurrentTime}
        />
      )
    }

    _setCurrentTime() {
    }
  }

  return WithMediaTime
}


export default withMediaTime
