import React, {PureComponent} from "react"
import PropTypes from "prop-types"

import MovieCard from "../movie-card/movie-card.jsx"


class MoviesList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeMovie: null,
    }

    this._movieCardMouseEnterHandler = this._movieCardMouseEnterHandler.bind(this)
  }

  render() {
    const {
      movies
    } = this.props

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => {
          return <MovieCard key={`movie-${i}`} movie={movie} onMouseEnter={this._movieCardMouseEnterHandler} />
        })}
      </div>
    )
  }

  _movieCardMouseEnterHandler(movie) {
    this.setState(() => {
      return {
        activeMovie: movie
      }
    })
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default MoviesList
