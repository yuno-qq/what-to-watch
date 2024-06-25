import {connect} from 'react-redux'

import MoviesList from "../components/movies-list/movies-list.jsx"


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    movies: state.movies
  })
}


export default connect(mapStateToProps)(MoviesList)
