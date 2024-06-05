import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class MovieCard extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      movie,
      onMouseEnter
    } = this.props

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnter(movie)}>
        <div className="small-movie-card__image">
          <img src={movie.imageSrc} alt={movie.name} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={movie.url}>{movie.name}</a>
        </h3>
      </article>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.exact({
    imageSrc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onMouseEnter: PropTypes.func.isRequired
}

export default MovieCard
