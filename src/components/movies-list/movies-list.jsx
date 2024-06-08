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
    this._movieCardMouseLeaveHandler = this._movieCardMouseLeaveHandler.bind(this)
  }

  render() {
    const {
      movies
    } = this.props

    const {
      activeMovie
    } = this.state

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => {
          return <MovieCard key={`movie-${i}`}
            movie={movie}
            isActive={movie === activeMovie}
            onMouseEnter={this._movieCardMouseEnterHandler}
            onMouseLeave={this._movieCardMouseLeaveHandler}/>
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

  _movieCardMouseLeaveHandler() {
    this.setState(() => {
      return {
        activeMovie: null
      }
    })
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default MoviesList
