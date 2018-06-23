import React from 'react'

export default (props) => {
  const estilo = {
    borderColor: props.isInvalido ? '#d50000' : '#cccccc',
    backgroundColor: props.isInvalido ? '#ffcdd2' : '#ffffff'
  };

  let propriedades = Object.assign({},props);
  delete propriedades.isInvalido;
  
  return (
    <input
      type="text"
      style={estilo}
      {...propriedades}
    />
  )
}
