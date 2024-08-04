import {describe, test, expect, beforeEach} from "@jest/globals"

import {filterMoviesByGenre, ActionCreator, reducer} from './reducer'


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

describe(`ActionCreator.setGenre() test`, () => {
  test(`should return action with "crime" payload`, () => {
    expect(ActionCreator.setGenre({
      id: `crime`,
      name: `Crime`
    })).toEqual({
      type: `SET_GENRE`,
      payload: {
        id: `crime`,
        name: `Crime`
      }
    })
  })
})

describe(`ActionCreator.filterMoviesByGenre() test`, () => {
  test(`should return action with "dramas" payload`, () => {
    const action = ActionCreator.filterMoviesByGenre({
      id: `dramas`,
      name: `Dramas`,
    }, movies)

    expect(action.type).toBe(`FILTER_MOVIES`)
    expect(action.payload.length).toBe(10)
    expect(action.payload.every((movie) => movie.genre.id === `dramas`)).toBe(true)
  })
})

describe(`reducer() SET_GENRE test`, () => {
  test(`should return state with new genre - "comedy"`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      showingMoviesCount: 4
    }

    expect(reducer(initialState, {
      type: `SET_GENRE`,
      payload: {
        id: `comedy`,
        name: `Comedy`
      }
    })).toEqual({
      genre: {
        id: `comedy`,
        name: `Comedy`
      },
      movies,
      showingMoviesCount: 4
    })
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

describe(`reducer() without correct action test`, () => {
  test(`should return initial state`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      showingMoviesCount: 4
    }

    expect(reducer(initialState, {
      type: `NOT_CORRECT_ACTION`,
      payload: {
        qqq: 123,
        www: 456
      }
    })).toEqual(initialState)
  })
})
