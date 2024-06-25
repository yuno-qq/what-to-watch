import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import VideoPlayer from "./video-player.jsx"


describe(`<VideoPlayer> snapshots:`, () => {
  test(`should render "Черное воскресенье"`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      previewSrc: `/black-sunday-preview`,
    }

    const tree = renderer.create(<VideoPlayer
      imageSrc={videoData.imageSrc}
      previewSrc={videoData.previewSrc}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
