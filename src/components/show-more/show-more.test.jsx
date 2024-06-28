import React from "react"
import {describe, test, expect} from "@jest/globals"
import renderer from "react-test-renderer"
import ShowMore from "./show-more"


describe(`<ShowMore> snapshots:`, () => {
  test(`should render button`, () => {
    const tree = renderer.create(<ShowMore onClick={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
