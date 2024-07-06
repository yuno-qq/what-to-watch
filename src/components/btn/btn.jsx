import React from "react"


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


export default Btn
