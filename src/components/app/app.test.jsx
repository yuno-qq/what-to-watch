import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"
import configureStore from "redux-mock-store"
import {Provider} from 'react-redux'

import movies from "../../mocks/movies.jsx"

import App from "./app.jsx"


describe(`<App> snapshots:`, () => {
  test(`should render main page`, () => {
    const initialState = {
      genre: {
        id: `all`,
        name: `All genres`
      },
      movies: [
        {
          genre: {
            id: `comedies`,
            name: `Comedies`,
          },
          imageSrc: `https://placehold.co/280x175/EEE/31343C`,
          url: `/`,
          previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          name: `Красный дракон`
        },
        {
          genre: {
            id: `comedies`,
            name: `Comedies`,
          },
          imageSrc: `https://placehold.co/280x175/EEE/31343C`,
          url: `/`,
          previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          name: `Молчание ягнят`
        },
      ]
    }

    const store = configureStore()(initialState)

    const tree = renderer.create(
        <Provider store={store}>
          <App movies={movies} />
        </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
