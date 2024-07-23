import React from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {test, expect, describe} from "@jest/globals"

import Btn from "./btn.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<Btn> click`, () => {
  test(`click`, () => {
    const onClick = jest.fn()
    const wrapper = mount(<Btn
      onClick={onClick}
      renderIcon={() => <svg></svg>}
      title={`Title`}
    />)

    let btn = wrapper.find(`button`)
    btn.simulate(`click`)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
