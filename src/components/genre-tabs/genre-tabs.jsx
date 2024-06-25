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


export default GenreTabs
