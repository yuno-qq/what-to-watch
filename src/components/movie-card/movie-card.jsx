import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import VideoPlayer from "../videoPlayer/video-player.jsx"


class MovieCard extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isPlaying: false,
    }

    this._TIME_BEFORE_PLAYING = 1000
    this._playingTimeout = null
  }

  render() {
    const {
      movie,
    } = this.props

    const {
      isPlaying
    } = this.state

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this._cardMouseEnterHandler()}
        onMouseLeave={() => this._cardMouseLeaveHandler()}>

        <div className="small-movie-card__image">
          <VideoPlayer imageSrc={movie.imageSrc}
            previewSrc={movie.previewSrc}
            shouldPlay={isPlaying}/>
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

    this._playingTimeout = setTimeout(() => {
      this.setState({
        isPlaying: true
      })
    }, this._TIME_BEFORE_PLAYING)

    onMouseEnter(movie)
  }

  _cardMouseLeaveHandler() {
    this.setState({
      isPlaying: false
    }, () => {
      clearTimeout(this._playingTimeout)
      this._playingTimeout = null
    })
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    imageSrc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired
}

export default MovieCard
