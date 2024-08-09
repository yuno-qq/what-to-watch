import {connect} from 'react-redux'

import {moviesToGenres, addDefaultGenre} from "../utils"
import {ActionCreator as ActionCreatorStatic} from "../reducers/static/static"
import {ActionCreator as ActionCreatorDynamic} from "../reducers/dynamic/dynamic"
import {store} from "../store/configure-store"

import GenreTabs from "../components/genre-tabs/genre-tabs.jsx"

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    genres: addDefaultGenre(moviesToGenres(state.dynamic.movies)),
    activeGenre: state.static.genre
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onClickTab: (genre) => {
      dispatch(ActionCreatorStatic.setGenre(genre))
      dispatch(ActionCreatorDynamic.filterMoviesByGenre(store.getState()))
      dispatch(ActionCreatorDynamic.resetMoviesCount())
    }
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs)
