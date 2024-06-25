import React from 'react'
import {describe, test, expect} from "@jest/globals"
import renderer from 'react-test-renderer'

import GenreTabs from "./genre-tabs.jsx"


describe(`<GenreTabs/> snapshots:`, () => {
  test(`should render first tab active`, () => {
    const genres = [
      {
        id: `all`,
        name: `All genres`
      },
      {
        id: `crime`,
        name: `Crime`
      },
      {
        id: `comedy`,
        name: `Comedy`
      },
    ]

    const tree = renderer.create(<GenreTabs
      genres={genres}
      activeGenre={genres[0]}
      onClickTab={() => {}}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test(`should render third tab active`, () => {
    const genres = [
      {
        id: `all`,
        name: `All genres`
      },
      {
        id: `crime`,
        name: `Crime`
      },
      {
        id: `comedy`,
        name: `Comedy`
      },
    ]

    const tree = renderer.create(<GenreTabs
      genres={genres}
      activeGenre={genres[2]}
      onClickTab={() => {}}
    />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
