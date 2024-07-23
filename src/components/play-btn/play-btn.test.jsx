import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"

import PlayBtn from "./play-btn.jsx"


describe(`<PlayBtn> snapshots:`, () => {
  test(`should render correctly`, () => {
    const tree = renderer.create(<PlayBtn
      onClick={() => {}}
      cssMix={`player__btn`}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
