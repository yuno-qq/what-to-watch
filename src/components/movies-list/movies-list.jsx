import React, {PureComponent} from "react"
import PropTypes from "prop-types"

import ShowMore from "../../containers/show-more"


class MoviesList extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      movies,
      showingMoviesCount,
      renderItems = () => {}
    } = this.props

    return (
      <>
        <div className="catalog__movies-list">
          {renderItems(movies, showingMoviesCount)}
        </div>

        {movies.length > showingMoviesCount && <ShowMore />}
      </>
    )
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showingMoviesCount: PropTypes.number.isRequired,
  activeItem: PropTypes.object,
  setActiveItem: PropTypes.func.isRequired
}


export default MoviesList
