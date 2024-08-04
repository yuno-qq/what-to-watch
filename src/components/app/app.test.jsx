import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"
import configureStore from "redux-mock-store"
import {Provider} from 'react-redux'

import App from "./app.jsx"

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
    id: `111111`,
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
    id: `111222`,
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
    id: `111333`,
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
    id: `111444`,
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
    id: `111555`,
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
    id: `111666`,
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
    id: `111777`,
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
    id: `111888`,
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
    id: `111999`,
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
    id: `222111`,
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
    id: `222222`,
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
    id: `222333`,
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
    id: `222444`,
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
    id: `222555`,
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
    id: `222666`,
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
    id: `222777`,
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
    id: `222888`,
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
    id: `222999`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Алмазная колесница`
  },
]

describe(`<App> snapshots:`, () => {
  test(`should render main page`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      filteredMovies: [
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
        }
      ],
      showingMoviesCount: 2,
    }

    const store = configureStore()(initialState)

    const tree = renderer.create(
        <Provider store={store}>
          <App hasServerError={false} isFullVideoOpened={false} movies={movies} />
        </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render main page with full video`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies,
      filteredMovies: [
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
        }
      ],
      showingMoviesCount: 2,
      isFullVideoOpened: true
    }

    const store = configureStore()(initialState)

    const tree = renderer.create(
        <Provider store={store}>
          <App hasServerError={false} isFullVideoOpened={true} movies={movies} />
        </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
