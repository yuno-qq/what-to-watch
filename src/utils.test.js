import {describe, test, expect} from "@jest/globals"

import {addDefaultGenre, moviesToGenres, getPageZoom} from "./utils"


describe(`addDefaultGenre() test`, () => {
  test(`should return default genre + genres`, () => {
    const genres = [
      {
        id: `crimes`,
        name: `Crimes`
      },
      {
        id: `dramas`,
        name: `Dramas`
      },
    ]

    expect(addDefaultGenre(genres)).toEqual([
      {
        id: `all`,
        name: `All genres`
      },
      {
        id: `crimes`,
        name: `Crimes`
      },
      {
        id: `dramas`,
        name: `Dramas`
      },
    ])
  })

  test(`should return only default genre`, () => {
    const genres = []

    expect(addDefaultGenre(genres)).toEqual([
      {
        id: `all`,
        name: `All genres`
      }
    ])
  })
})

describe(`moviesToGenres() test`, () => {
  test(`should return genres`, () => {
    const movies = [
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

    expect(moviesToGenres(movies)).toEqual([
      {
        id: `comedies`,
        name: `Comedies`,
      },
      {
        id: `crime`,
        name: `Crime`,
      },
      {
        id: `documentary`,
        name: `Documentary`,
      },
      {
        id: `dramas`,
        name: `Dramas`,
      }
    ])
  })
})

describe(`getPageZoom() test`, () => {
  test(`should word correctly`, () => {
    expect(getPageZoom()).toBe(1)
  })
})
