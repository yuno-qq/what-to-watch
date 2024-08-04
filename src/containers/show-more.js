import {connect} from 'react-redux'

import {ActionCreator, store, MOVIES_ON_PAGE_COUNT} from "../reducer"

import ShowMore from "../components/show-more/show-more.jsx"


const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onClick: () => {
      dispatch(ActionCreator.incrementMoviesCount(store.getState().filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().showingMoviesCount))
    }
  })
}


export default connect(undefined, mapDispatchToProps)(ShowMore)
