import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class MovieCard extends PureComponent {
  constructor(props) {
    super(props)

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this)
    this._cardMouseLeaveHandler = this._cardMouseLeaveHandler.bind(this)
  }

  render() {
    const {
      movie,
      renderItem = () => {}
    } = this.props

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this._cardMouseEnterHandler}
        onMouseLeave={this._cardMouseLeaveHandler}>

        <div className="small-movie-card__image">
          {renderItem(movie)}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={movie.url}>{movie.name}</a>
        </h3>
      </article>
    )
  }

  _cardMouseEnterHandler() {
    const {
      movie,
      onMouseEnter = () => {}
    } = this.props

    onMouseEnter(movie)
  }

  _cardMouseLeaveHandler() {
    const {
      onMouseLeave = () => {}
    } = this.props

    onMouseLeave()
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    imageSrc: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string
  }).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  renderItem: PropTypes.func.isRequired
}


export default MovieCard
