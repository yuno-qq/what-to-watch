import React, {act} from "react"
import Enzyme, {mount} from 'enzyme'
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"

import MovieCard from "./movie-card.jsx"
import VideoPlayer from "../video-player/video-player.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

jest.useFakeTimers()

beforeEach(() => {
  HTMLMediaElement.prototype.play = jest.fn()
  HTMLMediaElement.prototype.load = jest.fn()
})

describe(`<MovieCard> hovers`, () => {
  test(`mouseenter cb + mouseleave cb`, () => {
    const preventDefault = jest.fn()
    const onMouseEnter = jest.fn()
    const onMouseLeave = jest.fn()

    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`,
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
    }

    const wrapper = mount(<MovieCard
      movie={movie}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}/>)

    const firstCard = wrapper.find(`.small-movie-card`).at(0)

    firstCard.simulate(`mouseenter`, {
      preventDefault
    })

    expect(onMouseEnter).toHaveBeenCalledTimes(1)
    expect(onMouseEnter.mock.calls[0][0]).toEqual(movie)

    firstCard.simulate(`mouseleave`, {
      preventDefault
    })

    expect(onMouseLeave).toHaveBeenCalledTimes(1)
  })

  test(`small mouseenter x2 + normal mouseenter`, () => {
    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`,
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
    }

    const wrapper = mount(<MovieCard
      movie={movie} />)

    const videoWrapper = wrapper.find(VideoPlayer)

    act(() => {
      videoWrapper.setState({
        isLoading: false
      })
    })

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(800)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(false)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)

    wrapper.setProps({
      isActive: false
    })

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(950)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(false)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)

    wrapper.setProps({
      isActive: false
    })

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(1050)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(true)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
  })

  test(`normal mouseenter + mouseleave + normal mouseenter`, () => {
    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`,
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
    }

    const wrapper = mount(<MovieCard
      movie={movie} />)

    const videoWrapper = wrapper.find(VideoPlayer)

    act(() => {
      videoWrapper.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(1050)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(true)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)

    wrapper.setProps({
      isActive: false
    })

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(2)

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(1500)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(true)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2)
  })

  test(`normal mouseenter + mouseleave + small mouseenter`, () => {
    const movie = {
      imageSrc: `https://placehold.co/280x175/EEE/31343C`,
      url: `/`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      name: `Красный дракон`,
      genre: {
        id: `comedies`,
        name: `Comedies`,
      },
    }

    const wrapper = mount(<MovieCard
      movie={movie} />)

    const videoWrapper = wrapper.find(VideoPlayer)

    act(() => {
      videoWrapper.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1)

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(1050)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(true)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)

    wrapper.setProps({
      isActive: false
    })

    expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(2)

    wrapper.setProps({
      isActive: true
    })

    act(() => {
      jest.advanceTimersByTime(200)
    })

    expect(wrapper.state(`isPlaying`)).toEqual(false)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
  })
})
