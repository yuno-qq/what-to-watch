import React from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withPlayLoad from "./with-play-load.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<withPlayLoad> change state`, () => {
  test(`should change play state by props`, () => {
    const MockComponentWrapped = withPlayLoad(() => {
      return (
        <button></button>
      )
    })

    const wrapper = mount(<MockComponentWrapped />)

    expect(wrapper.state(`isPlaying`)).toBe(false)

    wrapper.setProps({shouldPlay: true})

    expect(wrapper.state(`isPlaying`)).toBe(true)
  })

  test(`should change load state`, () => {
    const MockComponentWrapped = withPlayLoad((props) => {
      const {
        setIsLoading
      } = props

      return (
        <button onClick={() => setIsLoading(false)}></button>
      )
    })

    const wrapper = mount(<MockComponentWrapped />)

    expect(wrapper.state(`isLoading`)).toBe(true)

    let btn = wrapper.find(`button`)
    btn.simulate(`click`, {
      preventDefault: () => {}
    })

    expect(wrapper.state(`isLoading`)).toBe(false)
  })
})
