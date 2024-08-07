import {connect} from 'react-redux'

import MoviesList from "../components/movies-list/movies-list.jsx"


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    movies: state.dynamic.filteredMovies,
    showingMoviesCount: state.dynamic.showingMoviesCount
  })
}


export default connect(mapStateToProps)(MoviesList)
