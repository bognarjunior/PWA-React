import React, { Component } from 'react'
import Header from './Header'
import NovoUsuario from './NovoUsuario'
import Toast from './Toast'
 
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NovoUsuario erro={msg=>this.refs.toast.erro(msg)} />
        <Toast ref="toast" />
      </div>
    )
  }
}
