import React from 'react'
import {describe, test, expect} from '@jest/globals'
import renderer from 'react-test-renderer'

import movies from "../../mocks/movies.jsx"

import MovieCard from './movie-card.jsx'


describe(`MovieCard snapshots`, () => {
  test(`main snapshot`, () => {
    const tree = renderer.create(<MovieCard movie={movies[0]} onMouseEnter={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
