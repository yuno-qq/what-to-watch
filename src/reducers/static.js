import {defaultGenre} from "../utils"


const initialState = {
  genre: defaultGenre,
  isFullVideoOpened: false,
}

const ActionCreator = {
  setGenre: (genre) => {
    return {
      type: `SET_GENRE`,
      payload: genre
    }
  },

  toggleFullVideo: (flag) => {
    return {
      type: `TOGGLE_FULL_VIDEO`,
      payload: flag
    }
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      })

    case `TOGGLE_FULL_VIDEO`:
      return Object.assign({}, state, {
        isFullVideoOpened: action.payload
      })

    case `FULL_RESET`:
      return Object.assign({}, initialState)
  }

  return state
}


export {reducer, ActionCreator}
