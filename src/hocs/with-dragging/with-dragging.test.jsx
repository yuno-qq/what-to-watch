import React from "react"
import renderer from "react-test-renderer"
import {describe, test, expect} from "@jest/globals"

import withDragging from "./with-dragging.jsx"


describe(`withDragging() snapshots`, () => {
  test(`should render correctly`, () => {
    const MockComponentWrapped = withDragging(() => <div className="MOCK_COMPONENT"></div>)
    const tree = renderer.create(<MockComponentWrapped/>)

    expect(tree).toMatchSnapshot()
  })
})
