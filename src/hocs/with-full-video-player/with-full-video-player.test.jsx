import React from "react"
import {describe, test, expect} from "@jest/globals"
import renderer from "react-test-renderer"

import withFullVideoPlayer from "./with-full-video-player.jsx"


describe(`withFullVideoPlayer() snapshots:`, () => {
  test(`should render correctly`, () => {
    const imageSrc = `image.svg`
    const videoSrc = `movie.avv`

    const MockComponentWrapped = withFullVideoPlayer((props) => <div className="MOCK_COMPONENT">{props.renderItem(imageSrc, videoSrc)}</div>)
    const tree = renderer.create(<MockComponentWrapped />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
