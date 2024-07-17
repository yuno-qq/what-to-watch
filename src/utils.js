const moviesToGenres = (movies) => {
  return movies.reduce((acc, movie) => {
    if (!acc.find((accMovie) => accMovie.genre.id === movie.genre.id)) {
      acc.push(movie)
    }

    return acc
  }, []).map((movie) => movie.genre)
}

const defaultGenre = {
  id: `all`,
  name: `All genres`
}

const addDefaultGenre = (genres) => {
  return [defaultGenre].concat(genres)
}

const getPageZoom = () => window.outerWidth / window.innerWidth


export {
  moviesToGenres,
  addDefaultGenre,
  defaultGenre,
  getPageZoom
}
