import React, {PureComponent} from "react"
import PropTypes from "prop-types"

import MovieCard from "../movie-card/movie-card.jsx"

import ShowMore from "../../containers/show-more"

import withPlay from "../../hocs/with-play/with-play.jsx"


const MovieCardWrapped = withPlay(MovieCard)

class MoviesList extends PureComponent {
  constructor(props) {
    super(props)

    this._movieCardMouseEnterHandler = this._movieCardMouseEnterHandler.bind(this)
    this._movieCardMouseLeaveHandler = this._movieCardMouseLeaveHandler.bind(this)
  }

  render() {
    const {
      movies,
      showingMoviesCount,
      activeItem
    } = this.props

    return (
      <>
        <div className="catalog__movies-list">
          {movies.slice(0, showingMoviesCount).map((movie, i) => {
            return <MovieCardWrapped key={`movie-${i}`}
              movie={movie}
              isActive={movie === activeItem}
              onMouseEnter={this._movieCardMouseEnterHandler}
              onMouseLeave={this._movieCardMouseLeaveHandler}/>
          })}
        </div>

        {movies.length > showingMoviesCount && <ShowMore />}
      </>
    )
  }

  _movieCardMouseEnterHandler(movie) {
    const {
      setActiveItem = () => {}
    } = this.props

    setActiveItem(movie)
  }

  _movieCardMouseLeaveHandler() {
    const {
      setActiveItem = () => {}
    } = this.props

    setActiveItem(null)
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showingMoviesCount: PropTypes.number.isRequired
}


export default MoviesList
