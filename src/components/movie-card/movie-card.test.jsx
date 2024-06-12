import React from 'react'
import {describe, test, expect} from '@jest/globals'
import renderer from 'react-test-renderer'

import MovieCard from './movie-card.jsx'


describe(`<MovieCard> snapshots:`, () => {
  test(`should render movie "Красный дракон"`, () => {
    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`
    }

    const tree = renderer.create(<MovieCard movie={movie} onMouseEnter={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
