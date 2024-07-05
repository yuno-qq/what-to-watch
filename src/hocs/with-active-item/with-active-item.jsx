import React, {PureComponent} from "react"


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        activeItem: null
      }

      this._setActiveItem = this._setActiveItem.bind(this)
    }

    render() {
      const {
        activeItem
      } = this.state

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          setActiveItem={this._setActiveItem}
        />
      )
    }

    _setActiveItem(activeItem) {
      this.setState({
        activeItem
      })
    }
  }

  return WithActiveItem
}


export default withActiveItem
