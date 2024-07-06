import React, {act} from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withVideoPlayer from "./with-video-player.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

jest.useFakeTimers()

describe(`<withVideoPlayer> change state isPlaying`, () => {
  test(`small hover + big hover`, () => {
    const findBlock = () => {
      block = wrapper.find(`.MOCK_COMPONENT`)
    }

    const preventDefault = jest.fn()

    const MockComponentWrapped = withVideoPlayer(() => {
      return <div className="MOCK_COMPONENT"></div>
    })

    const wrapper = mount(<MockComponentWrapped isActive={false} />)

    let block
    findBlock()

    wrapper.setProps({
      isActive: true
    })

    block.simulate(`mouseenter`, {
      preventDefault
    })

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(false)

    wrapper.setProps({
      isActive: false
    })

    findBlock()
    block.simulate(`mouseleave`, {
      preventDefault
    })

    wrapper.setProps({
      isActive: true
    })

    findBlock()
    block.simulate(`mouseenter`, {
      preventDefault
    })

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(true)

    wrapper.setProps({
      isActive: false
    })

    findBlock()
    block.simulate(`mouseleave`, {
      preventDefault
    })

    expect(wrapper.state(`isPlaying`)).toEqual(false)
  })
})
