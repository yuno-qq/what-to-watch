import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"

import movies from "../../mocks/movies.jsx"

import App from "./app.jsx"


describe(`<App> snapshots:`, () => {
  test(`should render main page`, () => {
    const tree = renderer.create(<App movies={movies} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
