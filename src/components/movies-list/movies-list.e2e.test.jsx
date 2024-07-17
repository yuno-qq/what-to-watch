import React, {act} from "react"
import Enzyme, {mount} from 'enzyme'
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"
import {Provider} from "react-redux"
import configureStore from "redux-mock-store"
import {compose} from "redux"

import MoviesList from "./movies-list.jsx"
import MovieCard from "../movie-card/movie-card.jsx"

import withVideoMovie from "../../hocs/with-video-movie/with-video-movie.jsx"
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx"


const MoviesListWrapped = compose(withActiveItem, withVideoMovie)(MoviesList)

Enzyme.configure({
  adapter: new Adapter()
})

jest.useFakeTimers()

beforeEach(() => {
  HTMLMediaElement.prototype.play = jest.fn()
  HTMLMediaElement.prototype.load = jest.fn()
})

describe(`<MovieList> mouseenter and mouseleave`, () => {
  test(`mouseenter + mouseleave + mouseenter + mouseenter`, () => {
    const movies = [
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        url: `/`,
        videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Красный дракон`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        url: `/`,
        videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Молчание ягнят`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        url: `/`,
        name: `Ганнибал`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        url: `/`,
        name: `Восхождение Ганнибала`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        url: `/`,
        name: `Черное воскресенье`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        url: `/`,
        name: `Кари Мора`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
    ]

    const preventDefault = () => {}

    const store = configureStore()({
      movies,
      genre: {
        id: `all`,
        name: `All genres`
      },
      showingMoviesCount: 4
    })

    const wrapper = mount(
        <Provider store={store}>
          <MoviesListWrapped showingMoviesCount={4}
            movies={movies}
          />
        </Provider>
    ).find(`WithActiveItem`)

    const firstMovieWrapper = wrapper.find(MovieCard).at(0)
    const firstMovie = firstMovieWrapper.find(`.small-movie-card`)
    const firstVideoWrapper = firstMovieWrapper.find(`WithPlayLoad`)

    const secondMovieWrapper = wrapper.find(MovieCard).at(1)
    const secondMovie = secondMovieWrapper.find(`.small-movie-card`)
    const secondVideoWrapper = secondMovieWrapper.find(`WithPlayLoad`)

    act(() => {
      firstVideoWrapper.setState({
        isLoading: false
      })

      secondVideoWrapper.setState({
        isLoading: false
      })
    })

    HTMLMediaElement.prototype.load = jest.fn()
    HTMLMediaElement.prototype.play = jest.fn()

    // mouseenter on first movie
    firstMovie.simulate(`mouseenter`, {
      preventDefault
    })

    act(() => {
      jest.advanceTimersByTime(1100)
    })

    expect(wrapper.state(`activeItem`)).toEqual(movies[0])
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(0)

    // first movie mouseleave
    HTMLMediaElement.prototype.load = jest.fn()
    HTMLMediaElement.prototype.play = jest.fn()

    firstMovie.simulate(`mouseleave`, {
      preventDefault
    })

    expect(wrapper.state(`activeItem`)).toBeNull()
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)

    // second movie mouseenter
    HTMLMediaElement.prototype.load = jest.fn()
    HTMLMediaElement.prototype.play = jest.fn()

    secondMovie.simulate(`mouseenter`, {
      preventDefault
    })

    act(() => {
      jest.advanceTimersByTime(1100)
    })

    expect(wrapper.state(`activeItem`)).toEqual(movies[1])
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(0)

    // first movie mousenter
    HTMLMediaElement.prototype.load = jest.fn()
    HTMLMediaElement.prototype.play = jest.fn()

    firstMovie.simulate(`mouseenter`, {
      preventDefault
    })

    act(() => {
      jest.advanceTimersByTime(1100)
    })

    expect(wrapper.state(`activeItem`)).toEqual(movies[0])
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)
  })
})
