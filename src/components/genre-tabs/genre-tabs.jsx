import React, {PureComponent} from 'react'
import PropTypes from "prop-types"


class GenreTabs extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      genres,
      activeGenre,
      onClickTab
    } = this.props

    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => {
          return (
            <li key={genre.id} className={`catalog__genres-item ${activeGenre.id === genre.id ? `catalog__genres-item--active` : ``}`}>
              <a onClick={(evt) => {
                evt.preventDefault()

                if (activeGenre.id === genre.id) {
                  return
                }

                onClickTab(genre)
              }}
              href="#" className="catalog__genres-link">{genre.name}</a>
            </li>
          )
        })}
      </ul>
    )
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
