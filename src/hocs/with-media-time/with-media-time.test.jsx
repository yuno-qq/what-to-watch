import React from "react"
import {describe, test, expect} from "@jest/globals"
import renderer from "react-test-renderer"

import withMediaTime from "./with-media-time.jsx"


describe(`withMediaTime() snapshots:`, () => {
  test(`should render correctly`, () => {
    const MockComponentWrapped = withMediaTime(() => <div className="MOCK_COMPONENT"></div>)
    const tree = renderer.create(<MockComponentWrapped />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
