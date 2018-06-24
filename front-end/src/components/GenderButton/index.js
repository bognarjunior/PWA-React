import React from 'react'
import './index.css'
 import GenderImage from '../GenderImage'
 
export default (props) => {
  return (
    <a
      className={
        props.selecionado ?
          "gender-button selected-gender-button" :
          "gender-button"
      }
      href="#!"
      onClick={e => props.atualizarGenero(e,props.genero)}
    >
      <GenderImage genero={props.genero}/>
    </a>
  )
}
