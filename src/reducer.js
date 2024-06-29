import {createStore} from "redux"

import moviesData from "./mocks/movies.jsx"
import {defaultGenre} from "./utils"


const MOVIES_ON_PAGE_COUNT = 4 // TODO 20

const initialState = {
  genre: defaultGenre,
  movies: moviesData,
  showingMoviesCount: MOVIES_ON_PAGE_COUNT > moviesData.length
    ? moviesData.length
    : MOVIES_ON_PAGE_COUNT
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

  setMoviesByGenre: (genre, movies) => {
    return {
      type: `SET_MOVIES`,
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
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      })

    case `SET_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload
      })

    case `RESET_MOVIES_COUNT`:
      return Object.assign({}, state, {
        showingMoviesCount: MOVIES_ON_PAGE_COUNT
      })

    case `INCREMENT_MOVIES_COUNT`:
      return Object.assign({}, state, {
        showingMoviesCount: state.showingMoviesCount + action.payload
      })

    case `FULL_RESET`:
      return Object.assign({}, initialState)
  }

  return state
}

const store = createStore(reducer)


export {
  filterMoviesByGenre,
  MOVIES_ON_PAGE_COUNT,
  ActionCreator,
  store,
  reducer
}
