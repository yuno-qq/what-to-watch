import React from 'react'
import {describe, test, expect} from '@jest/globals'
import renderer from 'react-test-renderer'

import MovieCard from './movie-card.jsx'

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx"


describe(`<MovieCard> snapshots:`, () => {
  test(`should render movie "Красный дракон"`, () => {
    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`,
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
    }

    const tree = renderer.create(<MovieCard renderItem={() => {}} movie={movie} onMouseEnter={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render movie card with videoPlayer`, () => {
    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`,
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
    }

    const MovieCardWrapped = withVideoPlayer(MovieCard)

    const tree = renderer.create(<MovieCardWrapped isActive={false} movie={movie} onMouseEnter={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
