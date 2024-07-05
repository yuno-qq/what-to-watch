import React, {PureComponent} from 'react'


const withPlayLoad = (Component) => {
  class WithPlayLoad extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        isLoading: true,
        isPlaying: false
      }

      this._setIsLoading = this._setIsLoading.bind(this)
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
        isLoading,
        isPlaying
      } = this.state

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          setIsLoading={this._setIsLoading}
        />
      )
    }

    _setIsLoading(flag) {
      this.setState({
        isLoading: flag
      })
    }
  }

  return WithPlayLoad
}


export default withPlayLoad
