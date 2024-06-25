import React, {act} from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"

import VideoPlayer from "./video-player.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

beforeEach(() => {
  HTMLMediaElement.prototype.play = jest.fn()
  HTMLMediaElement.prototype.load = jest.fn()
})

describe(`<VideoPlayer> play`, () => {
  test(`not play + play + not play`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      previewSrc: `/black-sunday-preview`,
    }

    const wrapper = mount(<VideoPlayer
      imageSrc={videoData.imageSrc}
      previewSrc={videoData.previewSrc}/>)

    act(() => {
      wrapper.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)
    expect(wrapper.state(`isPlaying`)).toEqual(false)

    wrapper.setProps({
      shouldPlay: true
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(wrapper.state(`isPlaying`)).toEqual(true)

    wrapper.setProps({
      shouldPlay: false
    })

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(2)
    expect(wrapper.state(`isPlaying`)).toEqual(false)
  })

  test(`play + no play`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      previewSrc: `/black-sunday-preview`,
    }

    const wrapper = mount(<VideoPlayer
      imageSrc={videoData.imageSrc}
      previewSrc={videoData.previewSrc}
      shouldPlay={true}/>)

    act(() => {
      wrapper.setState({
        isLoading: false
      })
    })

    expect(wrapper.state(`isPlaying`)).toEqual(true)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)

    wrapper.setProps({
      shouldPlay: false
    })

    expect(wrapper.state(`isPlaying`)).toEqual(false)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)
  })
})
