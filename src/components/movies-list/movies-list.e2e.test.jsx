import React, {act} from "react"
import Enzyme, {mount} from 'enzyme'
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"

import MoviesList from "./movies-list.jsx"
import MovieCard from "../movie-card/movie-card.jsx"
import VideoPlayer from "../video-player/video-player.jsx"

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
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Красный дракон`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        url: `/`,
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        name: `Молчание ягнят`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        url: `/`,
        name: `Ганнибал`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        url: `/`,
        name: `Восхождение Ганнибала`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        url: `/`,
        name: `Черное воскресенье`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
      {
        imageSrc: `https://placehold.co/280x175/EEE/31343C`,
        previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        url: `/`,
        name: `Кари Мора`,
        genre: {
          id: `comedies`,
          name: `Comedies`,
        },
      },
    ]

    const preventDefault = () => {}

    const wrapper = mount(<MoviesList movies={movies}/>)

    const firstMovieWrapper = wrapper.find(MovieCard).at(0)
    const firstMovie = firstMovieWrapper.find(`.small-movie-card`)
    const firstVideoWrapper = firstMovieWrapper.find(VideoPlayer)

    const secondMovieWrapper = wrapper.find(MovieCard).at(1)
    const secondMovie = secondMovieWrapper.find(`.small-movie-card`)
    const secondVideoWrapper = secondMovieWrapper.find(VideoPlayer)

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

    expect(wrapper.state(`activeMovie`)).toEqual(movies[0])
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(0)

    // first movie mouseleave
    HTMLMediaElement.prototype.load = jest.fn()
    HTMLMediaElement.prototype.play = jest.fn()

    firstMovie.simulate(`mouseleave`, {
      preventDefault
    })

    expect(wrapper.state(`activeMovie`)).toBeNull()
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

    expect(wrapper.state(`activeMovie`)).toEqual(movies[1])
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

    expect(wrapper.state(`activeMovie`)).toEqual(movies[0])
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)
  })
})
