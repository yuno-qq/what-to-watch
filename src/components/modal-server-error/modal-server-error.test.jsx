import React from "react"
import {describe, test, expect} from "@jest/globals"
import renderer from "react-test-renderer"

import ModalServerError from "./modal-server-error.jsx"


describe(`<ModalServerError> snapshots:`, () => {
  test(`should render correctly`, () => {
    const tree = renderer.create(<ModalServerError />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
