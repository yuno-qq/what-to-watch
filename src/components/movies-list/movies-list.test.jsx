import React from 'react'
import {describe, test, expect} from '@jest/globals'
import renderer from 'react-test-renderer'

import MoviesList from './movies-list.jsx'


describe(`Movies List snapshots`, () => {
  test(`main snapshot`, () => {
    const movies = [`Красный дракон`, `Молчание ягнят`, `Ганнибал`, `Восхождение Ганнибала`]
    const tree = renderer.create(<MoviesList movies={movies} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
