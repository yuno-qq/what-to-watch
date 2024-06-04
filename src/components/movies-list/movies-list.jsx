import React from 'react'
import PropTypes from 'prop-types'


const MoviesList = (props) => {
  const {
    movies
  } = props

  return (
    <div className="catalog__movies-list">

      {movies.map((movie, i) => {
        return (
          <article key={i} className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="https://placehold.co/280x175/EEE/31343C" alt={movie} width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="/">{movie}</a>
            </h3>
          </article>
        )
      })}
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default MoviesList
