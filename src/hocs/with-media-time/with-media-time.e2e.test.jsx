import React from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withMediaTime from "./with-media-time.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`withMediaTime() change states`, () => {
  test(`should change currentTime`, () => {
    const MockComponentWrapped = withMediaTime((props) => (
      <button onClick={() => props.setCurrentTime(12.2)}></button>
    ))

    const wrapper = mount(<MockComponentWrapped />)

    const btn = wrapper.find(`button`)
    btn.simulate(`click`)

    expect(wrapper.state(`currentTime`)).toBe(12.2)
  })

  test(`should change currentTimeByClick`, () => {
    const MockComponentWrapped = withMediaTime((props) => (
      <button onClick={() => props.setCurrentTimeByClick(13)}></button>
    ))

    const wrapper = mount(<MockComponentWrapped />)

    const btn = wrapper.find(`button`)
    btn.simulate(`click`)

    expect(wrapper.state(`currentTimeByClick`)).toBe(13)
  })

  test(`should change duration`, () => {
    const MockComponentWrapped = withMediaTime((props) => (
      <button onClick={() => props.setDuration(20)}></button>
    ))

    const wrapper = mount(<MockComponentWrapped />)

    const btn = wrapper.find(`button`)
    btn.simulate(`click`)

    expect(wrapper.state(`duration`)).toBe(20)
  })
})
