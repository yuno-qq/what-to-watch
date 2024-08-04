import React, {act} from 'react'
import {describe, test, expect, beforeEach} from "@jest/globals"
import Enzyme, {mount} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import {Provider} from "react-redux"

import {ActionCreator, MOVIES_ON_PAGE_COUNT, store} from "../../reducer"

import ShowMore from "./show-more.jsx"
import App from "../app/app.jsx"

import MoviesList from "../../containers/movies-list"

import withVideoMovie from "../../hocs/with-video-movie/with-video-movie.jsx"


const MoviesListWrapped = withVideoMovie(MoviesList)

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

    act(() => {
      store.dispatch(ActionCreator.loadMovies(movies))
      store.dispatch(ActionCreator.filterMoviesByGenre(store.getState().genre, movies))
      store.dispatch(ActionCreator.incrementMoviesCount(store.getState().filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().showingMoviesCount))
    })

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

    act(() => {
      store.dispatch(ActionCreator.loadMovies(movies))
      store.dispatch(ActionCreator.filterMoviesByGenre(store.getState().genre, movies))
      store.dispatch(ActionCreator.incrementMoviesCount(store.getState().filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().showingMoviesCount))
    })

    const wrapper = mount(
        <Provider store={store}>
          <App hasServerError={false} movies={movies} isFullVideoOpened={false} />
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
