import {createStore, applyMiddleware, compose} from "redux"
import {withExtraArgument} from "redux-thunk"

import createAPI from "./api"
import {defaultGenre} from "./utils"


const api = createAPI((...args) => store.dispatch(...args))

const MOVIES_ON_PAGE_COUNT = 4 // TODO 20

const initialState = {
  genre: defaultGenre,
  movies: [],
  filteredMovies: [],
  showingMoviesCount: MOVIES_ON_PAGE_COUNT,
  isFullVideoOpened: false
}

const filterMoviesByGenre = (genre, movies) => {
  if (genre.id === `all`) {
    return movies
  }

  return movies.filter((movie) => movie.genre.id === genre.id)
}

const ActionCreator = {
  setGenre: (genre) => {
    return {
      type: `SET_GENRE`,
      payload: genre
    }
  },

  filterMoviesByGenre: (genre, movies) => {
    return {
      type: `FILTER_MOVIES`,
      payload: filterMoviesByGenre(genre, movies)
    }
  },

  resetMoviesCount: () => {
    return {
      type: `RESET_MOVIES_COUNT`
    }
  },

  incrementMoviesCount: (moviesLength, moviesOnPageCount, showingMoviesCount) => {
    const incrementer = showingMoviesCount + moviesOnPageCount > moviesLength
      ? moviesLength - showingMoviesCount
      : moviesOnPageCount

    return {
      type: `INCREMENT_MOVIES_COUNT`,
      payload: incrementer
    }
  },

  toggleFullVideo: (flag) => {
    return {
      type: `TOGGLE_FULL_VIDEO`,
      payload: flag
    }
  },

  loadMovies: (movies) => {
    return {
      type: `LOAD_MOVIES`,
      payload: movies
    }
  }
}

const Operation = {
  loadMovies: () => (dispatch, getState, _api) => {
    return _api.get(`/c175f975-dcd9-4565-8bc9-05cad0f07a68`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data))
        dispatch(ActionCreator.filterMoviesByGenre(getState().genre, response.data))
      })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      })

    case `FILTER_MOVIES`:
      return Object.assign({}, state, {
        filteredMovies: action.payload
      })

    case `RESET_MOVIES_COUNT`:
      return Object.assign({}, state, {
        showingMoviesCount: MOVIES_ON_PAGE_COUNT
      })

    case `INCREMENT_MOVIES_COUNT`:
      return Object.assign({}, state, {
        showingMoviesCount: state.showingMoviesCount + action.payload
      })

    case `TOGGLE_FULL_VIDEO`:
      return Object.assign({}, state, {
        isFullVideoOpened: action.payload
      })

    case `LOAD_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload
      })

    case `FULL_RESET`:
      return Object.assign({}, initialState)
  }

  return state
}

const devToolsFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : (fn) => fn

const store = createStore(
    reducer,
    compose(applyMiddleware(withExtraArgument(api)), devToolsFn)
)


export {
  filterMoviesByGenre,
  MOVIES_ON_PAGE_COUNT,
  ActionCreator,
  store,
  reducer,
  api,
  Operation
}
