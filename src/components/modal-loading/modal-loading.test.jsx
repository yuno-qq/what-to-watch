import React from "react"
import {describe, test, expect} from "@jest/globals"
import renderer from "react-test-renderer"

import ModalLoading from "./modal-loading.jsx"


describe(`<ModalLoading> snapshots:`, () => {
  test(`should render correctly`, () => {
    const tree = renderer.create(<ModalLoading />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
