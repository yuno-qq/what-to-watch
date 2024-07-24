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

describe(`<VideoControls> full size`, () => {
  test(`full size`, () => {
    const setIsFullScreen = jest.fn()

    const wrapper = mount(<VideoControls
      setIsFullScreen={setIsFullScreen}
      duration={100}
      currentTime={20}
      isPlaying={true}
      currentTimeByClick={null}
    />)

    let sizeBtn = wrapper.find(`.player__full-screen`)
    sizeBtn.simulate(`click`)

    expect(setIsFullScreen).toHaveBeenCalledTimes(1)
    expect(setIsFullScreen.mock.calls[0][0]).toBe(true)
  })
})

describe(`<VideoControls> bar click`, () => {
  test(`click without duration`, () => {
    const setCurrentTimeByClick = jest.fn()

    const wrapper = mount(<VideoControls
      setCurrentTimeByClick={setCurrentTimeByClick}
      duration={null}
      currentTime={0}
      isPlaying={true}
      currentTimeByClick={null}
    />)

    const progressBar = wrapper.find(`progress`)
    progressBar.simulate(`click`)

    expect(setCurrentTimeByClick).toHaveBeenCalledTimes(0)
  })

  test(`click with duration`, () => {
    const setCurrentTimeByClick = jest.fn()

    const wrapper = mount(<VideoControls
      setCurrentTimeByClick={setCurrentTimeByClick}
      duration={100}
      currentTime={0}
      isPlaying={true}
      currentTimeByClick={null}
    />)

    const progressBar = wrapper.find(`progress`)
    progressBar.simulate(`click`)

    expect(setCurrentTimeByClick).toHaveBeenCalledTimes(1)
  })
})

describe(`<VideoControls> toggler mouse move`, () => {
  test(`mouse move without duration`, () => {
    const onDrag = jest.fn()

    const wrapper = mount(<VideoControls
      onDrag={onDrag}
      duration={null}
      currentTime={0}
      isPlaying={true}
      currentTimeByClick={null}
    />)

    const toggler = wrapper.find(`.player__toggler`)
    toggler.simulate(`mousedown`)

    expect(onDrag).toHaveBeenCalledTimes(0)
  })

  test(`mouse move duration`, () => {
    const onDrag = jest.fn()

    const wrapper = mount(<VideoControls
      onDrag={onDrag}
      duration={100}
      currentTime={0}
      isPlaying={true}
      currentTimeByClick={null}
    />)

    const toggler = wrapper.find(`.player__toggler`)
    toggler.simulate(`mousedown`)

    expect(onDrag).toHaveBeenCalledTimes(1)
  })
})
