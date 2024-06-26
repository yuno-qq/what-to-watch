import React, {PureComponent} from "react"
import PropTypes from "prop-types"

import MovieCard from "../movie-card/movie-card.jsx"

import ShowMore from "../../containers/show-more"


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
      movies,
      showingMoviesCount
    } = this.props

    const {
      activeMovie,
    } = this.state

    return (
      <>
        <div className="catalog__movies-list">
          {movies.slice(0, showingMoviesCount).map((movie, i) => {
            return <MovieCard key={`movie-${i}`}
              movie={movie}
              isActive={movie === activeMovie}
              onMouseEnter={this._movieCardMouseEnterHandler}
              onMouseLeave={this._movieCardMouseLeaveHandler}/>
          })}
        </div>

        {movies.length > showingMoviesCount && <ShowMore />}
      </>
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
  showingMoviesCount: PropTypes.number.isRequired
}


export default MoviesList
