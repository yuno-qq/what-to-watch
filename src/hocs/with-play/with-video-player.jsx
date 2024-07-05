import React, {PureComponent} from 'react'


const withPlay = (Component) => {
  class WithPlay extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isPlaying: false
      }

      this._setIsPlaying = this._setIsPlaying.bind(this)
    }

    render() {
      const {
        isPlaying
      } = this.state

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          setIsPlaying={this._setIsPlaying}
        />
      )
    }

    _setIsPlaying(flag, cb = () => {}) {
      this.setState({
        isPlaying: flag
      }, cb)
    }
  }

  return WithPlay
}


export default withPlay
