import {describe, test, expect, beforeEach} from "@jest/globals"
import MockAdapter from "axios-mock-adapter"
import axios from "axios"

import {filterMoviesByGenre, ActionCreator, Operation, reducer} from "./dynamic"


let movies

beforeEach(() => {
  movies = [
    {
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`
    },
    {
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Молчание ягнят`
    },
    {
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      url: `/`,
      name: `Ганнибал`
    },
    {
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      url: `/`,
      name: `Восхождение Ганнибала`
    },
    {
      genre: {
        id: `crime`,
        name: `Crime`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Черное воскресенье`
    },
    {
      genre: {
        id: `crime`,
        name: `Crime`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Кари Мора`
    },
    {
      genre: {
        id: `documentary`,
        name: `Documentary`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Профайлер`
    },
    {
      genre: {
        id: `documentary`,
        name: `Documentary`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Ящик скиннера`
    },
    {
      genre: {
        id: `documentary`,
        name: `Documentary`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Клинок молчания`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Азазель`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Турецкий гамбит`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Лефиафан`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Смерть Ахиллеса`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Особые поручения`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Статский советник`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Коронация`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Любовница смерти`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Любовник смерти`
    },
    {
      genre: {
        id: `dramas`,
        name: `Dramas`,
      },
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      url: `/`,
      name: `Алмазная колесница`
    },
  ]
})

describe(`filterMoviesByGenre() test`, () => {
  test(`should return movies by "crime"`, () => {
    const filteredMovies = filterMoviesByGenre({
      id: `crime`,
      name: `Crime`
    }, movies)

    expect(filteredMovies.length).toBe(2)
    expect(filteredMovies.every((movie) => movie.genre.id === `crime`)).toBe(true)
  })

  test(`should return all movies`, () => {
    const filteredMovies = filterMoviesByGenre({
      id: `all`,
      name: `All genres`
    }, movies)

    expect(filteredMovies.length).toBe(movies.length)
  })

  test(`should return 0 movies`, () => {
    const filteredMovies = filterMoviesByGenre({
      id: `not-correct`,
      name: `Not correct`
    }, movies)

    expect(filteredMovies.length).toBe(0)
  })

  test(`should return 0 movies by empty movies`, () => {
    const filteredMovies = filterMoviesByGenre({
      id: `crime`,
      name: `Crime`
    }, [])

    expect(filteredMovies.length).toBe(0)
  })
})

describe(`ActionCreator.filterMoviesByGenre() test`, () => {
  test(`should return action with "dramas" payload`, () => {
    const state = {
      static: {
        genre: {
          id: `dramas`,
          name: `Dramas`,
        }
      },
      dynamic: {
        movies
      }
    }

    const action = ActionCreator.filterMoviesByGenre(state)

    expect(action.type).toBe(`FILTER_MOVIES`)
    expect(action.payload.length).toBe(10)
    expect(action.payload.every((movie) => movie.genre.id === `dramas`)).toBe(true)
  })
})

describe(`ActionCreator.loadMovies() test`, () => {
  test(`should return action with movies`, () => {
    const action = ActionCreator.loadMovies(movies)

    expect(action.type).toBe(`LOAD_MOVIES`)
    expect(action.payload.length).toBe(19)
    expect(action.payload).toEqual(movies)
  })
})

describe(`ActionCreator.changeServerErrorStatus() test`, () => {
  test(`should return new action with hasError true`, () => {
    const action = ActionCreator.changeServerErrorStatus(true)

    expect(action.type).toBe(`CHANGE_SERVER_ERROR_STATUS`)
    expect(action.payload).toBe(true)
  })
})

describe(`reducer() FILTER_MOVIES test`, () => {
  test(`should return state with new movies - by "documentary"`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      filteredMovies: [],
      showingMoviesCount: 4
    }

    const crimeMovies = [
      {
        genre: {
          id: `crime`,
          name: `Crime`,
        },
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        url: `/`,
        name: `Черное воскресенье`
      },
      {
        genre: {
          id: `crime`,
          name: `Crime`,
        },
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        url: `/`,
        name: `Кари Мора`
      },
    ]

    expect(reducer(initialState, {
      type: `FILTER_MOVIES`,
      payload: crimeMovies
    })).toEqual({
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      filteredMovies: crimeMovies,
      showingMoviesCount: 4
    })
  })
})

describe(`reducer() LOAD_MOVIES test`, () => {
  test(`should return new state`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies: [],
      showingMoviesCount: 4
    }

    expect(reducer(initialState, {
      type: `LOAD_MOVIES`,
      payload: movies
    })).toEqual({
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      showingMoviesCount: 4
    })
  })
})

describe(`reducer() CHANGE_SERVER_ERROR_STATUS test`, () => {
  test(`should return new state with error`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies: [],
      showingMoviesCount: 4,
      hasServerError: false
    }

    expect(reducer(initialState, {
      type: `CHANGE_SERVER_ERROR_STATUS`,
      payload: true
    })).toEqual({
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies: [],
      showingMoviesCount: 4,
      hasServerError: true
    })
  })
})

describe(`Operation.loadMovies() test`, () => {
  test(`success status`, () => {
    const mockAxios = new MockAdapter(axios)
    const dispatch = jest.fn()
    const loadMovies = Operation.loadMovies()

    mockAxios.onGet(`/c175f975-dcd9-4565-8bc9-05cad0f07a68`)
      .reply(200, [{genre: {id: `all_genres`}}])

    return loadMovies(dispatch, () => ({
      static: {
        genre: {
          id: `all_genres`,
          name: `All genres`
        },
      },
      dynamic: {
        movies: [{genre: {id: `all_genres`}}],
        filteredMovies: [{genre: {id: `all_genres`}}]
      }
    }), axios)
      .then((response) => {
        expect(response.data).toEqual([{genre: {id: `all_genres`}}])
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(dispatch.mock.calls[0][0]).toEqual({
          type: `LOAD_MOVIES`,
          payload: [{genre: {id: `all_genres`}}]
        })
      })
  })

  test(`success status with error response`, () => {
    const mockAxios = new MockAdapter(axios)
    const dispatch = jest.fn()
    const loadMovies = Operation.loadMovies()

    mockAxios.onGet(`/c175f975-dcd9-4565-8bc9-05cad0f07a68`)
      .reply(200, null)

    expect.assertions(1)
    return loadMovies(dispatch, () => {}, axios)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(0)
      })
  })

  test(`404 status`, () => {
    const mockAxios = new MockAdapter(axios)
    const dispatch = jest.fn()
    const loadMovies = Operation.loadMovies()

    mockAxios.onGet(`/c175f975-dcd9-4565-8bc9-05cad0f07a68`)
      .reply(404)

    expect.assertions(1)
    return loadMovies(dispatch, () => {}, axios)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(0)
      })
  })
})
