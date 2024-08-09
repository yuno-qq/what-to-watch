import React, {act} from 'react'
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {test, expect, describe, beforeEach} from "@jest/globals"
import {Provider} from 'react-redux'

import {ActionCreator, MOVIES_ON_PAGE_COUNT} from "../../reducers/dynamic/dynamic"
import {store} from "../../store/configure-store"

import PlayBtn from "./play-btn.jsx"

import App from "../../containers/app"


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

describe(`<PlayBtn> click UNIT`, () => {
  test(`should clicked correctly`, () => {
    const onClick = jest.fn()
    const wrapper = mount(<PlayBtn onClick={onClick} />)

    const button = wrapper.find(`button`)
    button.simulate(`click`)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe(`<PlayBtn> click CONNECTED`, () => {
  beforeEach(() => {
    store.dispatch({
      type: `FULL_RESET`
    })
  })

  test(`should open video player`, () => {
    act(() => {
      store.dispatch(ActionCreator.loadMovies(movies))
      store.dispatch(ActionCreator.filterMoviesByGenre(store.getState().static.genre, movies))
      store.dispatch(ActionCreator.incrementMoviesCount(store.getState().dynamic.filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().dynamic.showingMoviesCount))
    })

    const wrapper = mount(<Provider store={store}>
      <App />
    </Provider>)

    let playBtn = wrapper.find(`.btn--play`)
    playBtn.simulate(`click`)

    let player = wrapper.find(`.player`)

    expect(player.length).toBe(1)
    expect(store.getState().static.isFullVideoOpened).toBe(true)

    let exitBtn = wrapper.find(`.player__exit`)
    exitBtn.simulate(`click`)

    player = wrapper.find(`.player`)

    expect(player.length).toBe(0)
    expect(store.getState().static.isFullVideoOpened).toBe(false)
  })
})
