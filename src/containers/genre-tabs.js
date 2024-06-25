import {connect} from 'react-redux'

import movies from "../mocks/movies.jsx"
import {moviesToGenres, addDefaultGenre} from "../utils"
import {ActionCreator} from "../reducer"

import GenreTabs from "../components/genre-tabs/genre-tabs.jsx"

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    genres: addDefaultGenre(moviesToGenres(movies)),
    activeGenre: state.genre
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onClickTab: (genre) => {
      dispatch(ActionCreator.setGenre(genre))
      dispatch(ActionCreator.setMoviesByGenre(genre, movies))
    }
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs)
