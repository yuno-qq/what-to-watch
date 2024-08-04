import React, {PureComponent} from "react"
import {compose} from "redux"
import PropTypes from "prop-types"

import movie from "../../mocks/movie"

import FullVideoPlayer from "../../containers/full-video-player"
import MoviesList from "../../containers/movies-list"
import GenreTabs from "../../containers/genre-tabs"
import PlayBtn from "../../containers/play-btn"

import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx"
import withVideoMovie from "../../hocs/with-video-movie/with-video-movie.jsx"
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player.jsx"
import withMediaTime from "../../hocs/with-media-time/with-media-time.jsx"

import ModalLoading from "../modal-loading/modal-loading.jsx"
import ModalServerError from "../modal-server-error/modal-server-error.jsx"


const MoviesListWrapped = compose(withActiveItem, withVideoMovie)(MoviesList)
const FullVideoPlayerWrapped = compose(withMediaTime, withFullVideoPlayer)(FullVideoPlayer)

class App extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      hasServerError,
      movies
    } = this.props

    if (hasServerError) {
      return this._getModalServerError()
    } else if (movies.length === 0) {
      return this._getModalLoading()
    }

    return this._getScreen()
  }

  _getModalLoading() {
    return <ModalLoading />
  }

  _getModalServerError() {
    return <ModalServerError />
  }

  _getScreen() {
    const {
      isFullVideoOpened
    } = this.props

    return (
      <>
        {isFullVideoOpened && <FullVideoPlayerWrapped movie={movie} />}

        <div>
          <section className="movie-card">
            <div className="movie-card__bg">
              <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
                </div>

                <div className="movie-card__desc">
                  <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">Drama</span>
                    <span className="movie-card__year">2014</span>
                  </p>

                  <div className="movie-card__buttons">
                    <PlayBtn cssMix={`movie-card__button`}/>

                    <button className="btn btn--list movie-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>

              <GenreTabs />
              <MoviesListWrapped />
            </section>

            <footer className="page-footer">
              <div className="logo">
                <a className="logo__link logo__link--light">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="copyright">
                <p>© 2019 What to watch Ltd.</p>
              </div>
            </footer>
          </div>
        </div>
      </>
    )
  }
}


App.propTypes = {
  isFullVideoOpened: PropTypes.bool.isRequired
}


export default App
