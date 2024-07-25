import React from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withDragging from "./with-dragging.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`withDragging() onDrag`, () => {
  test(`should change dragValue`, () => {
    const MockComponentWrapped = withDragging((props) => <div>
      <button onClick={() => props.onDrag(5)}></button>
    </div>)

    const wrapper = mount(<MockComponentWrapped />)
    const btn = wrapper.find(`button`)

    btn.simulate(`click`)

    expect(wrapper.state(`dragValue`)).toBe(5)
  })
})
