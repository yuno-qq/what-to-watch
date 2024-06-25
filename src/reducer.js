import {createStore} from "redux"

import moviesData from "./mocks/movies.jsx"
import {defaultGenre} from "./utils"


const initialState = {
  genre: defaultGenre,
  movies: moviesData
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
  }

  return state
}

const store = createStore(reducer)


export {
  filterMoviesByGenre,
  ActionCreator,
  store,
  reducer
}
