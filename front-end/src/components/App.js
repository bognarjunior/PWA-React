import React, { Component } from 'react';
import Header from './Header';
import NovoUsuario from './NovoUsuario';
 
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NovoUsuario />
      </div>
    )
  }
}
