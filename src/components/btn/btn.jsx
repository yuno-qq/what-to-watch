import React from "react"
import PropTypes from "prop-types"


const Btn = (props) => {
  const {
    cssMod = ``,
    cssMix = ``,
    renderIcon,
    title,
    onClick = () => {}
  } = props

  return (
    <button onClick={onClick} className={`btn ${cssMod} ${cssMix}`} type="button">
      {renderIcon()}
      <span>{title}</span>
    </button>
  )
}

Btn.propTypes = {
  cssMod: PropTypes.string,
  cssMix: PropTypes.string,
  renderIcon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}


export default Btn
