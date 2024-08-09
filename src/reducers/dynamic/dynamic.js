import {createSelector} from "reselect"


const MOVIES_ON_PAGE_COUNT = 4 // TODO 20

const initialState = {
  movies: [],
  filteredMovies: [],
  showingMoviesCount: 0,
  hasServerError: false
}

const filterMoviesByGenre = (genre, movies) => {
  if (genre.id === `all`) {
    return movies
  }

  return movies.filter((movie) => movie.genre.id === genre.id)
}

const selectFilteredMoviesByGenre = createSelector(
    [
      (state) => state.static.genre,
      (state) => state.dynamic.movies,
    ],
    filterMoviesByGenre
)

const ActionCreator = {
  filterMoviesByGenre: (state) => {
    return {
      type: `FILTER_MOVIES`,
      payload: selectFilteredMoviesByGenre(state)
    }
  },

  loadMovies: (movies) => {
    return {
      type: `LOAD_MOVIES`,
      payload: movies
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

  changeServerErrorStatus: (flag) => {
    return {
      type: `CHANGE_SERVER_ERROR_STATUS`,
      payload: flag
    }
  }
}

const Operation = {
  loadMovies: () => (dispatch, getState, _api) => {
    return _api.get(`/c175f975-dcd9-4565-8bc9-05cad0f07a68`)
      .then((response) => {
        if (!response || !response.data) {
          throw new Error()
        }

        dispatch(ActionCreator.loadMovies(response.data))
        dispatch(ActionCreator.filterMoviesByGenre(getState()))
        dispatch(ActionCreator.incrementMoviesCount(getState().dynamic.filteredMovies.length, MOVIES_ON_PAGE_COUNT, getState().showingMoviesCount))

        return response
      })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    case `LOAD_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload
      })

    case `CHANGE_SERVER_ERROR_STATUS`:
      return Object.assign({}, state, {
        hasServerError: action.payload
      })

    case `FULL_RESET`:
      return Object.assign({}, initialState)
  }

  return state
}


export {reducer, ActionCreator, Operation, filterMoviesByGenre, MOVIES_ON_PAGE_COUNT, selectFilteredMoviesByGenre}
