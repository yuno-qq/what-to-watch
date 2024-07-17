import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import VideoPlayer from "./video-player.jsx"


describe(`<VideoPlayer> snapshots:`, () => {
  test(`should render "Черное воскресенье"`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const tree = renderer.create(<VideoPlayer
      isLoading={true}
      isPlaying={false}
      setIsLoading={() => {}}
      imageSrc={videoData.imageSrc}
      videoSrc={videoData.videoSrc}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
