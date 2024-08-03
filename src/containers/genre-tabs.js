import {connect} from 'react-redux'

import {moviesToGenres, addDefaultGenre} from "../utils"
import {ActionCreator, store} from "../reducer"

import GenreTabs from "../components/genre-tabs/genre-tabs.jsx"

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    genres: addDefaultGenre(moviesToGenres(state.movies)),
    activeGenre: state.genre
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onClickTab: (genre) => {
      dispatch(ActionCreator.setGenre(genre))
      dispatch(ActionCreator.filterMoviesByGenre(genre, store.getState().movies))
      dispatch(ActionCreator.resetMoviesCount())
    }
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs)
