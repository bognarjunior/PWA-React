import React, { Component } from 'react'
import Header from './Header'
import NovoUsuario from './NovoUsuario'
import Toast from './Toast'
import Usuario from '../models/Usuario'

export default class App extends Component {
  constructor() {
    super();
    Usuario.obter(usuario => {
      this.setState({usuario: usuario});
    },() => {
      this.setState({usuario: undefined});
    });
  };
  

  msgNovoUsuario = (usuario) => {
    let genero = usuario.genero === 'm' ? 'o' : 'a';
    this.refs.toast.sucesso(
      `Seja bem-vind${genero} ${usuario.nome}!`
    );
  }

  renderizarNovoUsuario = () => {
    let usuario = this.state.usuario;        
    if (usuario) {
      return (
        <div style={{marginTop: '140px', textAlign: 'center'}}>
          <b>Usuário obtido do <i>localStorage</i></b><br />
          {usuario.toString()}
        </div>
      )
    } else {
      return (
        <NovoUsuario
          onSubmit={usuario => {                        
            usuario.salvar(() => {
              this.setState({
                usuario: usuario
              }, () => {
                this.msgNovoUsuario(usuario)
              })                            
            });
          }}
          erro={msg=>this.refs.toast.erro(msg)}
        />
      )
    }      
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderizarNovoUsuario()}
        <Toast ref="toast" />
      </div>
    );
  }
}
