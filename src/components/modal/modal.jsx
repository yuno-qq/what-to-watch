import React from "react"


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


export default Modal
