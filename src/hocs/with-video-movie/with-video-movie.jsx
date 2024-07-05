import React, {PureComponent} from 'react'

import MovieCard from "../../components/movie-card/movie-card.jsx"

import withVideoPlayer from "../with-play/with-video-player.jsx"


const MovieCardWrapped = withVideoPlayer(MovieCard)

const withVideoMovie = (Component) => {
  class WithVideoMovie extends PureComponent {
    constructor(props) {
      super(props)

      this._movieCardMouseEnterHandler = this._movieCardMouseEnterHandler.bind(this)
      this._movieCardMouseLeaveHandler = this._movieCardMouseLeaveHandler.bind(this)
      this._renderItems = this._renderItems.bind(this)
    }

    render() {
      return (
        <Component
          {...this.props}
          renderItems={this._renderItems}
        />
      )
    }

    _renderItems(movies, showingMoviesCount) {
      const {
        activeItem
      } = this.props

      return movies.slice(0, showingMoviesCount).map((movie, i) => {
        return <MovieCardWrapped key={`movie-${i}`}
          movie={movie}
          isActive={movie === activeItem}
          onMouseEnter={this._movieCardMouseEnterHandler}
          onMouseLeave={this._movieCardMouseLeaveHandler}/>
      })
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

  return WithVideoMovie
}


export default withVideoMovie
