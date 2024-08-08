import {describe, test, expect, beforeEach} from "@jest/globals"

import {ActionCreator, reducer} from './static'


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

