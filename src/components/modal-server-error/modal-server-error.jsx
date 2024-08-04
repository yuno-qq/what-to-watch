import React from 'react'

import Modal from "../modal/modal.jsx"


const ModalServerError = () => {
  return (
    <Modal title={`Произошла ошибка`} text={`Пожалуйста, перезагрузите страницу`} />
  )
}


export default ModalServerError
