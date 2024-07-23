import React from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withFullVideoPlayer from "./with-full-video-player.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`withFullVideoPlayer() change state`, () => {
  test(`should change isPlaying`, () => {
    const MockComponentWrapped = withFullVideoPlayer((props) => (
      <button onClick={() => props.setIsPlaying(false)}></button>
    ))

    const wrapper = mount(<MockComponentWrapped />)

    const btn = wrapper.find(`button`)
    btn.simulate(`click`)

    expect(wrapper.state(`isPlaying`)).toBe(false)
  })

  test(`should change isFullScreen`, () => {
    const MockComponentWrapped = withFullVideoPlayer((props) => (
      <button onClick={() => props.setIsFullScreen(true)}></button>
    ))

    const wrapper = mount(<MockComponentWrapped />)

    const btn = wrapper.find(`button`)
    btn.simulate(`click`)

    expect(wrapper.state(`isFullScreen`)).toBe(true)
  })
})


