import React from "react"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect} from "@jest/globals"

import withVideoMovie from "./with-video-movie"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<withVideoMovie> use callbacks`, () => {
  test(`should call setActiveItem when hover and leave`, () => {
    const movies = [
      {
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        url: `/`,
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Красный дракон`
      },
      {
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
        id: `111111`,
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        url: `/`,
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Молчание ягнят`
      },
    ]

    const MockComponentWrapped = withVideoMovie((props) => {
      const {
        renderItems
      } = props

      return (
        <div className="MOCK_WRAPPER">
          {renderItems(movies, movies.length)}
        </div>
      )
    })

    const setActiveItem = jest.fn()
    const preventDefault = jest.fn()

    const wrapper = mount(<MockComponentWrapped setActiveItem={setActiveItem} />)

    let movie1 = wrapper.find(`.small-movie-card`).at(0)
    movie1.simulate(`mouseenter`, {
      preventDefault
    })

    movie1 = wrapper.find(`.small-movie-card`).at(0)
    movie1.simulate(`mouseleave`, {
      preventDefault
    })

    let movie2 = wrapper.find(`.small-movie-card`).at(1)
    movie2.simulate(`mouseenter`, {
      preventDefault
    })

    movie2 = wrapper.find(`.small-movie-card`).at(0)
    movie2.simulate(`mouseleave`, {
      preventDefault
    })

    expect(setActiveItem).toHaveBeenCalledTimes(4)
    expect(setActiveItem.mock.calls[0][0]).toEqual(movies[0])
    expect(setActiveItem.mock.calls[1][0]).toEqual(null)
    expect(setActiveItem.mock.calls[2][0]).toEqual(movies[1])
    expect(setActiveItem.mock.calls[3][0]).toEqual(null)
  })
})
