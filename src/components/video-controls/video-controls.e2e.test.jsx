import React from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {test, expect, describe} from "@jest/globals"

import VideoControls from "./video-controls.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<VideoControls> play pause`, () => {
  test(`pause + play`, () => {
    const setIsPlaying = jest.fn()

    const wrapper = mount(<VideoControls
      setIsPlaying={setIsPlaying}
      duration={100}
      currentTime={20}
      isPlaying={true}
      currentTimeByClick={null}
    />)

    let playBtn = wrapper.find(`.player__play`)
    playBtn.simulate(`click`)

    expect(setIsPlaying).toHaveBeenCalledTimes(1)
    expect(setIsPlaying.mock.calls[0][0]).toBe(false)

    wrapper.setProps({
      isPlaying: false,
    })

    playBtn = wrapper.find(`.player__play`)
    playBtn.simulate(`click`)

    expect(setIsPlaying).toHaveBeenCalledTimes(2)
    expect(setIsPlaying.mock.calls[1][0]).toBe(true)
  })
})
