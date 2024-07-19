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

  HTMLMediaElement.prototype.pause = function () {
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

  jest.spyOn(HTMLMediaElement.prototype, `pause`)

  HTMLMediaElement.prototype.requestFullscreen = jest.fn()
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

  test(`play + pause`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const wrapper = mount(<VideoPlayerWrapped
      isLoadInsteadPause={false}
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
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1)
  })
})

describe(`<VideoPlayer> load data`, () => {
  test(`should load meta data`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const setDuration = jest.fn()
    const wrapper = mount(<VideoPlayer
      setDuration={setDuration}
      setIsLoading={() => {}}
      isPlaying={false}
      isLoading={true}
      imageSrc={videoData.imageSrc}
      videoSrc={videoData.videoSrc}/>)

    wrapper.setProps({
      isLoading: false
    })

    const video = wrapper.find(`video`)

    video.simulate(`loadedmetadata`, {
      preventDefault: () => {}
    })

    expect(setDuration).toHaveBeenCalledTimes(1)
  })
})

describe(`<VideoPlayer> screen size`, () => {
  test(`should full screen`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const setIsFullScreen = jest.fn()
    const wrapper = mount(<VideoPlayer
      setIsFullScreen={setIsFullScreen}
      setIsLoading={() => {}}
      isPlaying={false}
      isLoading={true}
      imageSrc={videoData.imageSrc}
      videoSrc={videoData.videoSrc}/>)

    act(() => {
      wrapper.setProps({
        isLoading: false,
        isFullScreen: true
      })
    })

    expect(HTMLMediaElement.prototype.requestFullscreen).toHaveBeenCalledTimes(1)
  })
})

describe(`<VideoPlayer> time update`, () => {
  test(`should call setCurrentTime`, () => {
    const videoData = {
      imageSrc: `/black-sunday-image`,
      videoSrc: `/black-sunday-preview`,
    }

    const setCurrentTime = jest.fn()
    const wrapper = mount(<VideoPlayer
      setCurrentTime={setCurrentTime}
      setIsLoading={() => {}}
      isPlaying={false}
      isLoading={true}
      imageSrc={videoData.imageSrc}
      videoSrc={videoData.videoSrc}/>)

    act(() => {
      wrapper.setProps({
        isLoading: false,
      })
    })

    const video = wrapper.find(`video`)
    video.simulate(`timeupdate`, {
      preventDefault: () => {}
    })

    expect(setCurrentTime).toHaveBeenCalledTimes(1)
  })
})
