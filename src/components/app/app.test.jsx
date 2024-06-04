import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"

import App from "./app.jsx"


describe(`App rendering`, () => {
  test(`main snapshot`, () => {
    const tree = renderer.create(<App />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
