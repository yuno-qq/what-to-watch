import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"

import FullVideoPlayer from "./full-video-player.jsx"


describe(`<FullVideoPlayer> snapshots:`, () => {
  test(`should render correctly`, () => {
    const movie = {
      imageSrc: `image.svg`,
      videoSrc: `video.wav`
    }

    const tree = renderer.create(<FullVideoPlayer
      duration={200}
      currentTime={20}
      movie={movie}
      renderItem={() => <div className="MOCK_COMPONENT"></div>}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
