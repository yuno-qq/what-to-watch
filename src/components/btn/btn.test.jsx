import React from 'react'
import renderer from 'react-test-renderer'
import {describe, test, expect} from "@jest/globals"

import Btn from "./btn.jsx"


describe(`<Btn> snapshots:`, () => {
  test(`should render basic case`, () => {
    const btn = renderer.create(<Btn renderIcon={() => <svg></svg>} title={`Title of button`}/>)
      .toJSON()

    expect(btn).toMatchSnapshot()
  })

  test(`should render with all props`, () => {
    const btn = renderer.create(<Btn renderIcon={() => <svg></svg>}
      title={`Title of 2nd button`}
      cssMod={`btn--size_sm`}
      cssMix={`player__btn`}
      onClick={() => {}}
    />).toJSON()

    expect(btn).toMatchSnapshot()
  })
})
