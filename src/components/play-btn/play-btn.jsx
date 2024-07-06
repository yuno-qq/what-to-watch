import React, {PureComponent} from "react"

import Btn from "../btn/btn.jsx"


class PlayBtn extends PureComponent {
  constructor(props) {
    super(props)

    this._renderIcon = this._renderIcon.bind(this)
  }

  render() {
    const {
      cssMix = ``,
      onClick
    } = this.props

    return (
      <Btn
        onClick={onClick}
        cssMix={cssMix}
        cssMod={`btn--play`}
        renderIcon={this._renderIcon}
        title={`Play`}
      />
    )
  }

  _renderIcon() {
    return (
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
    )
  }
}


export default PlayBtn
