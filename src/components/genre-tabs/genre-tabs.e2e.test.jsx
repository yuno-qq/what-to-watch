import React, {act} from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {describe, test, expect, beforeEach} from "@jest/globals"
import {Provider} from 'react-redux'

import {ActionCreator, MOVIES_ON_PAGE_COUNT} from "../../reducers/dynamic/dynamic"
import {store} from "../../store/configure-store"

import GenreTabs from "./genre-tabs.jsx"
import App from "../app/app.jsx"


Enzyme.configure({
  adapter: new Adapter()
})

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
    act(() => {
      store.dispatch(ActionCreator.loadMovies(movies))
      store.dispatch(ActionCreator.filterMoviesByGenre(store.getState().static.genre, movies))
      store.dispatch(ActionCreator.incrementMoviesCount(store.getState().dynamic.filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().dynamic.showingMoviesCount))
    })

    const wrapper = mount(<Provider store={store}>
      <App hasServerError={false} movies={movies} isFullVideoOpened={false} />
    </Provider>)

    expect(store.getState().static.genre).toEqual({
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

    expect(store.getState().static.genre).toEqual({
      id: `comedies`,
      name: `Comedies`
    })
    expect(store.getState().dynamic.filteredMovies.length).toEqual(4)
    expect(store.getState().dynamic.filteredMovies.every((movie) => movie.genre.id === `comedies`)).toBe(true)

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

    expect(store.getState().static.genre).toEqual({
      id: `crime`,
      name: `Crime`
    })
    expect(store.getState().dynamic.filteredMovies.length).toEqual(2)
    expect(store.getState().dynamic.filteredMovies.every((movie) => movie.genre.id === `crime`)).toBe(true)

    expect(tab3.hasClass(`catalog__genres-item--active`)).toBe(true)
    expect(movieCards.length).toBe(2)
    expect(movieCards.at(0).text()).toBe(`Черное воскресенье`)
  })
})
