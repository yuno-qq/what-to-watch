import React from "react"
import PropTypes from "prop-types"


const Modal = (props) => {
  const {
    title,
    text
  } = props

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}


export default Modal
