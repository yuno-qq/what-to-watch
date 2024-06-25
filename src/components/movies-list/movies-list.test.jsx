import React from 'react'
import {describe, test, expect} from '@jest/globals'
import renderer from 'react-test-renderer'

import MoviesList from './movies-list.jsx'


describe(`<MoviesList> snapshots:`, () => {
  test(`should render movies ["Красный дракон", "Молчание ягнят", "Ганнибал", "Восхождение Ганнибала", "Черное воскресенье", "Кари Мора"]`, () => {
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

    const tree = renderer.create(<MoviesList movies={movies} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
