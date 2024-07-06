import React from 'react'
import {describe, test, expect} from '@jest/globals'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

import MoviesList from './movies-list.jsx'

import withVideoMovie from "../../hocs/with-video-movie/with-video-movie.jsx"


const movies = [
  {
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    url: `/`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    name: `Красный дракон`,
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
  },
  {
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    url: `/`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    name: `Молчание ягнят`,
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
  },
  {
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    url: `/`,
    name: `Ганнибал`,
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
  },
  {
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    url: `/`,
    name: `Восхождение Ганнибала`,
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
  },
  {
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Черное воскресенье`,
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
  },
  {
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Кари Мора`,
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
  },
]

describe(`<MoviesList> snapshots:`, () => {
  test(`should render correctly`, () => {
    const store = configureStore()({
      movies,
      genre: {
        id: `all`,
        name: `All genres`,
      },
      showingMoviesCount: 4
    })

    const tree = renderer.create(
        <Provider store={store}>
          <MoviesList renderItems={() => {}} movies={movies} showingMoviesCount={4} />
        </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render movies ["Красный дракон", "Молчание ягнят", "Ганнибал", "Восхождение Ганнибала", "Черное воскресенье", "Кари Мора"]`, () => {
    const store = configureStore()({
      movies,
      genre: {
        id: `all`,
        name: `All genres`,
      },
      showingMoviesCount: 4
    })

    const MoviesListWrapped = withVideoMovie(MoviesList)

    const tree = renderer.create(
        <Provider store={store}>
          <MoviesListWrapped
            movies={movies}
            showingMoviesCount={4}
            setActiveItem={() => {}}
          />
        </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
