import React, {PureComponent} from "react"


const withDragging = (Component) => {
  class WithDragging extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        dragValue: null
      }

      this._dragHandler = this._dragHandler.bind(this)
    }

    render() {
      const {
        dragValue
      } = this.state

      return (
        <Component
          {...this.props}
          dragValue={dragValue}
          onDrag={this._dragHandler}
        />
      )
    }

    _dragHandler(dragValue) {
      this.setState({
        dragValue
      })
    }
  }

  return WithDragging
}


export default withDragging
