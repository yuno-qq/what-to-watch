import {connect} from 'react-redux'

import {ActionCreator, MOVIES_ON_PAGE_COUNT} from "../reducers/dynamic/dynamic"
import {store} from "../store/configure-store"

import ShowMore from "../components/show-more/show-more.jsx"


const mapDispatchToProps = (dispatch, ownProps) => {
  return Object.assign({}, ownProps, {
    onClick: () => {
      dispatch(ActionCreator.incrementMoviesCount(store.getState().dynamic.filteredMovies.length, MOVIES_ON_PAGE_COUNT, store.getState().dynamic.showingMoviesCount))
    }
  })
}


export default connect(undefined, mapDispatchToProps)(ShowMore)
