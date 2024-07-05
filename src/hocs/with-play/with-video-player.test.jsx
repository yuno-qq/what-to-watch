import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import withVideoPlayer from "./with-video-player.jsx"


describe(`<withVideoPlayer> snapshots:`, () => {
  test(`should render component with videoPlayer`, () => {
    const MockComponentWrapped = withVideoPlayer((props) => {
      const {
        renderItem
      } = props

      const movie = {
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        url: `/`,
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Красный дракон`
      }

      return (
        <div className="MOCK_WRAPPER">
          {renderItem(movie)}
        </div>
      )
    })

    const tree = renderer.create(<MockComponentWrapped isActive={true} />)

    expect(tree).toMatchSnapshot()
  })
})
