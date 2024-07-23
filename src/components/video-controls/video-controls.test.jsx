import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"

import VideoControls from "./video-controls.jsx"


describe(`<VideoControls> snapshots:`, () => {
  test(`should render without direction`, () => {
    const tree = renderer.create(<VideoControls
      isPlaying={true}
      duration={null}
      currentTime={0}
      currentTimeByClick={null}
      dragValue={null}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render on pause`, () => {
    const tree = renderer.create(<VideoControls
      isPlaying={false}
      duration={null}
      currentTime={0}
      currentTimeByClick={null}
      dragValue={null}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render with duration`, () => {
    const tree = renderer.create(<VideoControls
      isPlaying={true}
      duration={100}
      currentTime={30}
      currentTimeByClick={null}
      dragValue={null}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render with dragValue`, () => {
    const tree = renderer.create(<VideoControls
      isPlaying={true}
      duration={100}
      currentTime={30}
      currentTimeByClick={null}
      dragValue={88}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
