import React, {act} from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"

import VideoPlayer from "./video-player.jsx"

import withPlayLoad from "../../hocs/with-play-load/with-play-load"


const VideoPlayerWrapped = withPlayLoad(VideoPlayer)

Enzyme.configure({
  adapter: new Adapter()
})

beforeEach(() => {
  HTMLMediaElement.prototype.play = function () {
    Object.defineProperty(this, `paused`, {
      configurable: true,

      set(value) {
        this._paused = value
      },

      get() {
        return this._paused
      }
    })

    this.paused = false
  }

  jest.spyOn(HTMLMediaElement.prototype, `play`)

  HTMLMediaElement.prototype.load = function () {
    Object.defineProperty(this, `paused`, {
      configurable: true,

      set(value) {
        this._paused = value
      },

      get() {
        return this._paused
      }
    })

    this.paused = true
  }

  jest.spyOn(HTMLMediaElement.prototype, `load`)
})

describe(`<VideoPlayer> play`, () => {
  test(`not play + play + not play`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const wrapper = mount(<VideoPlayerWrapped
      imageSrc={videoData.imageSrc}
      videoSrc={videoData.videoSrc}/>)

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

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)
    expect(wrapper.state(`isPlaying`)).toEqual(false)
  })

  test(`play + no play`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const wrapper = mount(<VideoPlayerWrapped
      imageSrc={videoData.imageSrc}
      videoSrc={videoData.videoSrc}
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
