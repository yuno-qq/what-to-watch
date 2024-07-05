import React from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withActiveItem from "./with-active-item.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<withActiveItem> change state:`, () => {
  test(`should change activeItem`, () => {
    const MockComponentWrapped = withActiveItem((props) => {
      const {
        setActiveItem
      } = props

      return (
        <div>
          <button onClick={() => setActiveItem({test: `test`})}></button>
        </div>
      )
    })

    const wrapper = mount(<MockComponentWrapped/>)

    expect(wrapper.state(`activeItem`)).toBeNull()

    let btn = wrapper.find(`button`)
    btn.simulate(`click`, {
      preventDefault: () => {}
    })

    expect(wrapper.state(`activeItem`)).toEqual({test: `test`})
  })
})
