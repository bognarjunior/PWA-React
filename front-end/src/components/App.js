import React, { Component } from 'react'
import Header from './Header'
import NovoUsuario from './NovoUsuario'
import Toast from './Toast'
 
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NovoUsuario 
          onSubmit={usuario => {
            let genero = usuario.genero === 'm' ? 'o' : 'a'
            this.refs.toast.sucesso(
              `Seja bem-vind${genero} ${usuario.nome}!`
              )
          }}
          erro={msg=>this.refs.toast.erro(msg)} 
        />
        <Toast ref="toast" />
      </div>
    )
  }
}
