import React from "react"
import Enzyme, {mount} from 'enzyme'
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import movies from "../../mocks/movies"

import MovieCard from "./movie-card.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<MovieCard> hovers`, () => {
  test(`basic hover`, () => {
    const preventDefault = jest.fn()
    const onMouseEnter = jest.fn()

    const movie = movies[0]

    const wrapper = mount(<MovieCard movie={movie} onMouseEnter={onMouseEnter} />)
    const firstCard = wrapper.find(`.small-movie-card`).at(0)

    firstCard.simulate(`mouseenter`, {
      preventDefault
    })

    expect(onMouseEnter).toHaveBeenCalledTimes(1)
    expect(onMouseEnter.mock.calls[0][0]).toEqual(movie)
  })
})
