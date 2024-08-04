import React from "react"
import {describe, test, expect} from "@jest/globals"
import renderer from "react-test-renderer"

import Modal from "./modal.jsx"


describe(`<Modal> snapshots:`, () => {
  test(`should render correctly`, () => {
    const tree = renderer.create(<Modal title={`Заголовок`} text={`Текст попапа`} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
