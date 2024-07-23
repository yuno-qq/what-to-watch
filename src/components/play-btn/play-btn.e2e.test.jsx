import React from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {test, expect, describe, beforeEach} from "@jest/globals"
import {Provider} from 'react-redux'

import {store} from "../../reducer"

import PlayBtn from "./play-btn.jsx"

import App from "../../containers/app"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<PlayBtn> click UNIT`, () => {
  test(`should clicked correctly`, () => {
    const onClick = jest.fn()
    const wrapper = mount(<PlayBtn onClick={onClick} />)

    const button = wrapper.find(`button`)
    button.simulate(`click`)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe(`<PlayBtn> click CONNECTED`, () => {
  beforeEach(() => {
    store.dispatch({
      type: `FULL_RESET`
    })
  })

  test(`should open video player`, () => {
    const wrapper = mount(<Provider store={store}>
      <App />
    </Provider>)

    let playBtn = wrapper.find(`.btn--play`)
    playBtn.simulate(`click`)

    let player = wrapper.find(`.player`)

    expect(player.length).toBe(1)
    expect(store.getState().isFullVideoOpened).toBe(true)

    let exitBtn = wrapper.find(`.player__exit`)
    exitBtn.simulate(`click`)

    player = wrapper.find(`.player`)

    expect(player.length).toBe(0)
    expect(store.getState().isFullVideoOpened).toBe(false)
  })
})
