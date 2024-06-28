import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"
import {Provider} from 'react-redux'

import {store} from "../../reducer"

import GenreTabs from "./genre-tabs.jsx"
import App from "../app/app.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

describe(`<GenreTabs> click on tabs UNIT`, () => {
  test(`2nd tab`, () => {
    const genres = [
      {
        id: `all`,
        name: `All genres`,
      },
      {
        id: `crime`,
        name: `Crime`,
      },
      {
        id: `fun`,
        name: `Fun`,
      }
    ]

    const onClickTab = jest.fn()
    const preventDefault = () => {}

    const wrapper = mount(<GenreTabs
      genres={genres}
      activeGenre={genres[0]}
      onClickTab={onClickTab} />)

    let link2 = wrapper.find(`.catalog__genres-link`).at(1)

    link2.simulate(`click`, {
      preventDefault
    })

    expect(onClickTab).toHaveBeenCalledTimes(1)
    expect(onClickTab.mock.calls[0][0]).toBe(genres[1])
  })
})

describe(`<GenreTabs> click on tabs CONNECTED`, () => {
  beforeEach(() => {
    HTMLMediaElement.prototype.play = jest.fn()
    HTMLMediaElement.prototype.load = jest.fn()
  })

  test(`2nd tab + 3rd tab + 1st tab`, () => {
    const wrapper = mount(<Provider store={store}>
      <App />
    </Provider>)

    expect(store.getState().genre).toEqual({
      id: `all`,
      name: `All genres`,
    })

    const preventDefault = () => {}


    let tab2 = wrapper.find(`.catalog__genres-item`).at(1)
    let link2 = tab2.find(`.catalog__genres-link`)

    link2.simulate(`click`, {
      preventDefault
    })

    tab2 = wrapper.find(`.catalog__genres-item`).at(1)
    let movieCards = wrapper.find(`.small-movie-card`)

    expect(store.getState().genre).toEqual({
      id: `comedies`,
      name: `Comedies`
    })
    expect(store.getState().movies.length).toEqual(4)
    expect(store.getState().movies.every((movie) => movie.genre.id === `comedies`)).toBe(true)

    expect(tab2.hasClass(`catalog__genres-item--active`)).toBe(true)
    expect(movieCards.length).toBe(4)
    expect(movieCards.at(2).text()).toBe(`Ганнибал`)

    let tab3 = wrapper.find(`.catalog__genres-item`).at(2)
    let link3 = tab3.find(`.catalog__genres-link`)

    link3.simulate(`click`, {
      preventDefault
    })

    tab3 = wrapper.find(`.catalog__genres-item`).at(2)
    movieCards = wrapper.find(`.small-movie-card`)

    expect(store.getState().genre).toEqual({
      id: `crime`,
      name: `Crime`
    })
    expect(store.getState().movies.length).toEqual(2)
    expect(store.getState().movies.every((movie) => movie.genre.id === `crime`)).toBe(true)

    expect(tab3.hasClass(`catalog__genres-item--active`)).toBe(true)
    expect(movieCards.length).toBe(2)
    expect(movieCards.at(0).text()).toBe(`Черное воскресенье`)
  })
})
