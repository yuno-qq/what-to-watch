import React from 'react'
import {describe, test, expect, beforeEach} from "@jest/globals"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {Provider} from "react-redux"

import {store} from "../../reducer"

import ShowMore from "./show-more.jsx"
import App from "../app/app.jsx"

import MoviesList from "../../containers/movies-list"

import withVideoMovie from "../../hocs/with-video-movie/with-video-movie.jsx"


const MoviesListWrapped = withVideoMovie(MoviesList)

Enzyme.configure({
  adapter: new Adapter()
})

beforeEach(() => {
  store.dispatch({
    type: `FULL_RESET`
  })

  HTMLMediaElement.prototype.play = jest.fn()
  HTMLMediaElement.prototype.load = jest.fn()
})

describe(`<ShowMore> click UNIT`, () => {
  test(`should call callback`, () => {
    const onClick = jest.fn()
    const wrapper = mount(<ShowMore onClick={onClick} />)

    let btn = wrapper.find(`.catalog__button`)

    btn.simulate(`click`, {
      preventDefault: () => {}
    })

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe(`<ShowMore> click CONNECTED`, () => {
  test(`clicks before movies end`, () => {
    const clickAndFind = () => {
      showMoreBtn.simulate(`click`, {
        preventDefault: () => {}
      })

      showMoreBtn = wrapper.find(`.catalog__button`)
      moviesCards = wrapper.find(`.small-movie-card`)
    }

    const wrapper = mount(
        <Provider store={store}>
          <MoviesListWrapped setActiveItem={() => {}} />
        </Provider>
    )

    let showMoreBtn = wrapper.find(`.catalog__button`)
    let moviesCards = wrapper.find(`.small-movie-card`)

    clickAndFind()

    expect(store.getState().showingMoviesCount).toBe(8)
    expect(showMoreBtn.length).toBe(1)
    expect(moviesCards.length).toBe(8)

    clickAndFind()

    expect(store.getState().showingMoviesCount).toBe(12)
    expect(showMoreBtn.length).toBe(1)
    expect(moviesCards.length).toBe(12)

    clickAndFind()

    expect(store.getState().showingMoviesCount).toBe(16)
    expect(showMoreBtn.length).toBe(1)
    expect(moviesCards.length).toBe(16)

    clickAndFind()

    expect(store.getState().showingMoviesCount).toBe(19)
    expect(showMoreBtn.length).toBe(0)
    expect(moviesCards.length).toBe(19)
  })

  test(`click on genre should reset movies count`, () => {
    const find = () => {
      showMoreBtn = wrapper.find(`.catalog__button`)
      moviesCards = wrapper.find(`.small-movie-card`)
      genreLinks = wrapper.find(`.catalog__genres-link`)
    }

    const wrapper = mount(
        <Provider store={store}>
          <App isFullVideoOpened={false} />
        </Provider>
    )

    let showMoreBtn = wrapper.find(`.catalog__button`)
    let moviesCards = wrapper.find(`.small-movie-card`)
    let genreLinks = wrapper.find(`.catalog__genres-link`)

    showMoreBtn.simulate(`click`, {
      preventDefault: () => {}
    })

    find()

    expect(store.getState().showingMoviesCount).toBe(8)
    expect(moviesCards.length).toBe(8)

    genreLinks.at(4).simulate(`click`, {
      preventDefault: () => {}
    })

    find()

    expect(store.getState().showingMoviesCount).toBe(4)
    expect(moviesCards.length).toBe(4)
  })
})
