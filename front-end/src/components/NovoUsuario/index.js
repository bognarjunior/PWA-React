import React, { Component } from 'react'
import Label from '../Label'
import Input from '../Input'

export default class NovoUsuario extends Component {
  state = { 
    usuario: {
      nome: ''
    },
    validacao: {
      nomeInvalido: false
    }
  };
  
  atualizarNome = (e) => {
    let usuario = this.state.usuario;
    usuario.nome = e.target.value;
    this.setState({
      usuario: usuario
    });
  }

  render() {
    
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label  htmlFor="nome" texto="Quem é você?" isInvalido={this.state.validacao.nomeInvalido} />
          <Input
            id="nome"
            placeholder="Digite seu nome"
            maxLength="40"
            readOnly={false}
            isInvalido={this.state.validacao.nomeInvalido}
            defaultValue={this.state.usuario.nome}
            onChange={this.atualizarNome}
          />
        </form>
      </div>
    )
  }
}
