import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import withActiveItem from "./with-active-item.jsx"


describe(`<withActiveItem> snapshots:`, () => {
  test(`should render component`, () => {
    const MockComponent = withActiveItem(() => <div className="MOCK_COMPONENT"></div>)

    const tree = renderer.create(<MockComponent />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
