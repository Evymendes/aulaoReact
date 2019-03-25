import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Manipulacao from './Manipulacao';
import MyButton from './clickButtom';
import Ola from './OlaComoVai.js';
import Palavras from './PalavraMaiorMenor';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
    }
  }

  remover = () => {
    this.setState({numero : this.state.numero - 1})
  };
  adiciona = () => {
    this.setState({numero : this.state.numero + 1})
  };
  zerar = () => {
    this.setState({numero: this.state.numero = 0})
  }

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{this.state.numero}</p><br/>
        <button  className="button"  onClick={this.adiciona}>+</button>
        <button  className="button"  onClick={this.remover}>-</button>
        <button  className="button"  onClick={this.zerar}>zerar</button><br/><br/>
        <p>----------------------------------------------------------------</p>
          <Manipulacao />
        <p>----------------------------------------------------------------</p>
          <MyButton />
        <p>----------------------------------------------------------------</p>
          <Ola />
        <p>----------------------------------------------------------------</p>
          <Palavras />
        <p>----------------------------------------------------------------</p>
        <div>
          <input placeholder="Digite..." className="input"/>
          <button title="enter" className="button2" />
          <p>oi</p>
       </div>
      </div>
    );
  }
}

export default App;