import React, {act} from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {test, expect, describe, beforeEach} from "@jest/globals"
import {Provider} from "react-redux"
import {compose} from "redux"

import {MOVIES_ON_PAGE_COUNT, ActionCreator} from "../../reducers/dynamic/dynamic"
import {store} from "../../store/configure-store"

import FullVideoPlayer from "./full-video-player.jsx"

import App from "../../containers/app"

import withMediaTime from "../../hocs/with-media-time/with-media-time"
import withFullVideoPlayer from "../../hocs/with-full-video-player/with-full-video-player"


const FullVideoPlayerWrapped = compose(withMediaTime, withFullVideoPlayer)(FullVideoPlayer)

const movies = [
  {
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    url: `/`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    name: `Молчание ягнят`
  },
  {
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
    id: `111222`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    url: `/`,
    name: `Ганнибал`
  },
  {
    genre: {
      id: `comedies`,
      name: `Comedies`,
    },
    id: `111333`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    url: `/`,
    name: `Восхождение Ганнибала`
  },
  {
    genre: {
      id: `crime`,
      name: `Crime`,
    },
    id: `111444`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Черное воскресенье`
  },
  {
    genre: {
      id: `crime`,
      name: `Crime`,
    },
    id: `111555`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Кари Мора`
  },
  {
    genre: {
      id: `documentary`,
      name: `Documentary`,
    },
    id: `111666`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Профайлер`
  },
  {
    genre: {
      id: `documentary`,
      name: `Documentary`,
    },
    id: `111777`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Ящик скиннера`
  },
  {
    genre: {
      id: `documentary`,
      name: `Documentary`,
    },
    id: `111888`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Клинок молчания`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `111999`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Азазель`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222111`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Турецкий гамбит`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222222`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Лефиафан`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222333`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Смерть Ахиллеса`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222444`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Особые поручения`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222555`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Статский советник`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222666`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Коронация`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222777`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Любовница смерти`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222888`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Любовник смерти`
  },
  {
    genre: {
      id: `dramas`,
      name: `Dramas`,
    },
    id: `222999`,
    imageSrc: `https://placehold.co/280x175/EEE/31343C`,
    videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    url: `/`,
    name: `Алмазная колесница`
  },
]

Enzyme.configure({
  adapter: new Adapter()
})

beforeEach(() => {
  act(() => {
    store.dispatch({
      type: `FULL_RESET`
    })
  })

  HTMLMediaElement.prototype.play = function () {
    Object.defineProperty(this, `paused`, {
      configurable: true,

      set(value) {
        this._paused = value
      },

      get() {
        return this._paused
      }
    })

    this.paused = false
  }

  jest.spyOn(HTMLMediaElement.prototype, `play`)

  HTMLMediaElement.prototype.pause = function () {
    Object.defineProperty(this, `paused`, {
      configurable: true,

      set(value) {
        this._paused = value
      },

      get() {
        return this._paused
      }
    })

    this.paused = true
  }

  jest.spyOn(HTMLMediaElement.prototype, `pause`)
})

describe(`<FullVideoPlayer> exit UNIT`, () => {
  test(`should call fn`, () => {
    const movie = {
      name: `Красный дракон`,
      imageSrc: `image.png`,
      videoSrc: `video.wav`
    }

    const onExitBtnClick = jest.fn()
    const wrapper = mount(<FullVideoPlayer
      isPlaying={true}
      onExitBtnClick={onExitBtnClick}
      duration={200}
      currentTime={20}
      movie={movie}
      renderItem={() => <div className="MOCK_COMPONENT"></div>}
    />)

    const exitBtn = wrapper.find(`.player__exit`)

    exitBtn.simulate(`click`)

    expect(onExitBtnClick).toHaveBeenCalledTimes(1)
  })
})

describe(`<FullVideoPlayer> exit CONNECTED`, () => {
  act(() => {
    store.dispatch(ActionCreator.loadMovies(movies))
    store.dispatch(ActionCreator.filterMoviesByGenre(store.getState()))
    store.dispatch(ActionCreator.incrementMoviesCount(store.getState().dynamic.filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().dynamic.showingMoviesCount))
  })

  const wrapper = mount(<Provider store={store}>
    <App />
  </Provider>)

  const playBtn = wrapper.find(`.btn--play`)
  playBtn.simulate(`click`)

  expect(store.getState().static.isFullVideoOpened).toBe(true)
  expect(wrapper.find(`.player`).length).toBe(1)

  const exitBtn = wrapper.find(`.player__exit`)
  exitBtn.simulate(`click`)

  expect(store.getState().static.isFullVideoOpened).toBe(false)
  expect(wrapper.find(`.player`).length).toBe(0)
})

describe(`<FullVideoPlayer> playing`, () => {
  test(`should play by default`, () => {
    const movie = {
      name: `Красный дракон`,
      imageSrc: `image.png`,
      videoSrc: `video.wav`
    }

    const wrapper = mount(<FullVideoPlayerWrapped movie={movie} />)
    const videoPlayerWithPlayLoad = wrapper.find(`WithPlayLoad`)

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)

    act(() => {
      videoPlayerWithPlayLoad.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
  })

  test(`should pause and play again`, () => {
    const movie = {
      name: `Красный дракон`,
      imageSrc: `image.png`,
      videoSrc: `video.wav`
    }

    const wrapper = mount(<FullVideoPlayerWrapped movie={movie} />)
    const videoPlayerWithPlayLoad = wrapper.find(`WithPlayLoad`)

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(0)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(0)

    act(() => {
      videoPlayerWithPlayLoad.setState({
        isLoading: false
      })
    })

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)

    let playBtn = wrapper.find(`.player__play`)
    playBtn.simulate(`click`)
    playBtn = wrapper.find(`.player__play`)

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(playBtn.find(`use`).getDOMNode().attributes[`xlink:href`].nodeValue).toBe(`#play-s`)

    playBtn.simulate(`click`)
    playBtn = wrapper.find(`.player__play`)

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2)
    expect(playBtn.find(`use`).getDOMNode().attributes[`xlink:href`].nodeValue).toBe(`#pause`)
  })
})
