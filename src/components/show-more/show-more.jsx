import React, {PureComponent} from 'react'
import {PropTypes} from 'prop-types'


class ShowMore extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      onClick
    } = this.props

    return (
      <div className="catalog__more">
        <button onClick={onClick} className="catalog__button" type="button">Show more</button>
      </div>
    )
  }
}

ShowMore.propTypes = {
  onClick: PropTypes.func.isRequired
}


export default ShowMore
