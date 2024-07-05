import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import withPlayLoad from "./with-play-load.jsx"


describe(`<withPlayLoad> snapshots:`, () => {
  test(`should render component`, () => {
    const MockComponentWrapped = withPlayLoad(() => <div className="MOCK_COMPONENT"></div>)

    const tree = renderer.create(<MockComponentWrapped />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})