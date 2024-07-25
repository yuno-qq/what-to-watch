import React, {act} from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {test, expect, describe, beforeEach} from "@jest/globals"
import {Provider} from "react-redux"
import {compose} from "redux"

import {store} from "../../reducer"

import FullVideoPlayer from "./full-video-player.jsx"

import App from "../../containers/app"

import withMediaTime from "../../hocs/with-media-time/with-media-time"
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player"


const FullVideoPlayerWrapped = compose(withMediaTime, withFullVideoPlayer)(FullVideoPlayer)

Enzyme.configure({
  adapter: new Adapter()
})

beforeEach(() => {
  act(() => {
    store.dispatch({
      type: `FULL_RESET`
    })
  })

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
})

describe(`<FullVideoPlayer> exit UNIT`, () => {
  test(`should call fn`, () => {
    const movie = {
      name: `Красный дракон`,
      imageSrc: `image.png`,
      videoSrc: `video.wav`
    }

    const onExitBtnClick = jest.fn()
    const wrapper = mount(<FullVideoPlayer
      isPlaying={true}
      onExitBtnClick={onExitBtnClick}
      duration={200}
      currentTime={20}
      movie={movie}
      renderItem={() => <div className="MOCK_COMPONENT"></div>}
    />)

    const exitBtn = wrapper.find(`.player__exit`)

    exitBtn.simulate(`click`)

    expect(onExitBtnClick).toHaveBeenCalledTimes(1)
  })
})

describe(`<FullVideoPlayer> exit CONNECTED`, () => {
  const wrapper = mount(<Provider store={store}>
    <App />
  </Provider>)

  const playBtn = wrapper.find(`.btn--play`)
  playBtn.simulate(`click`)

  expect(store.getState().isFullVideoOpened).toBe(true)
  expect(wrapper.find(`.player`).length).toBe(1)

  const exitBtn = wrapper.find(`.player__exit`)
  exitBtn.simulate(`click`)

  expect(store.getState().isFullVideoOpened).toBe(false)
  expect(wrapper.find(`.player`).length).toBe(0)
})

describe(`<FullVideoPlayer> playing`, () => {
  test(`should play by default`, () => {
    const movie = {
      name: `Красный дракон`,
      imageSrc: `image.png`,
      videoSrc: `video.wav`
    }

    const wrapper = mount(<FullVideoPlayerWrapped movie={movie} />)
    const videoPlayerWithPlayLoad = wrapper.find(`WithPlayLoad`)

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)

    act(() => {
      videoPlayerWithPlayLoad.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
  })

  test(`should pause and play again`, () => {
    const movie = {
      name: `Красный дракон`,
      imageSrc: `image.png`,
      videoSrc: `video.wav`
    }

    const wrapper = mount(<FullVideoPlayerWrapped movie={movie} />)
    const videoPlayerWithPlayLoad = wrapper.find(`WithPlayLoad`)

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(0)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)

    act(() => {
      videoPlayerWithPlayLoad.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)

    let playBtn = wrapper.find(`.player__play`)
    playBtn.simulate(`click`)
    playBtn = wrapper.find(`.player__play`)

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(playBtn.find(`use`).getDOMNode().attributes[`xlink:href`].nodeValue).toBe(`#play-s`)

    playBtn.simulate(`click`)
    playBtn = wrapper.find(`.player__play`)

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2)
    expect(playBtn.find(`use`).getDOMNode().attributes[`xlink:href`].nodeValue).toBe(`#pause`)
  })
})
