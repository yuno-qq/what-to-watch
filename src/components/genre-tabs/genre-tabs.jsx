import React, {PureComponent} from 'react'
import PropTypes from "prop-types"


class GenreTabs extends PureComponent {
  constructor(props) {
    super(props)

    this._tabClickHandler = this._tabClickHandler.bind(this)
  }

  render() {
    const {
      genres,
      activeGenre,
    } = this.props

    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => {
          return (
            <li key={genre.id} className={`catalog__genres-item ${activeGenre.id === genre.id ? `catalog__genres-item--active` : ``}`}>
              <a onClick={(evt) => this._tabClickHandler(evt, genre)}
                href="#" className="catalog__genres-link">{genre.name}</a>
            </li>
          )
        })}
      </ul>
    )
  }

  _tabClickHandler(evt, genre) {
    const {
      onClickTab,
      activeGenre
    } = this.props

    evt.preventDefault()

    if (activeGenre.id === genre.id) {
      return
    }

    onClickTab(genre)
  }
}

GenreTabs.propTypes = {
  onClickTab: PropTypes.func.isRequired,
  activeGenre: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

  genres: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}


export default GenreTabs
