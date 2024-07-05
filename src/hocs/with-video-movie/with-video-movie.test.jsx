import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import withVideoMovie from "./with-video-movie.jsx"


describe(`<withVideoMovie> snapshots:`, () => {
  test(`should render component with video MovieCards`, () => {
    const MockComponentWrapped = withVideoMovie((props) => {
      const {
        renderItems
      } = props

      const movies = [
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
          id: `111111`,
          imageSrc: `https://placehold.co/280x175/EEE/31343C`,
          url: `/`,
          previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          name: `Молчание ягнят`
        },
      ]

      return (
        <div className="MOCK_WRAPPER">
          {renderItems(movies, movies.length)}
        </div>
      )
    })

    const tree = renderer.create(<MockComponentWrapped />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
