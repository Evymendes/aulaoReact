

/*javascriptbook.com.br*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Manipulacao from './Manipulacao';
import MyButton from './clickButtom';
import Ola from './OlaComoVai.js';
import Palavras from './PalavraMaiorMenor';
import Search from './components/pesquisaInput/Search';
import Table from './components/pesquisaInput/Table';
import TestApi from './components/testApi';


const lista = [ 
  {
    objectID: 0,
    nome: 'Evelyn',
    sobrenome: 'Mendes',
    sexo: 'Feminino'
  },
  {
    objectID: 1,
    nome: 'Kelvin',
    sobrenome: 'Almeida',
    sexo: 'Masculino'
  }
]

/*function isSearched(searchTerm) {
  return function(item) {
  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
}
}*/
/*const isSearched = searchTerm => item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());*/
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      /*number: 0,
      pausa: false,
      numero: 0,
      lista,
      searchTerm: '',
      button: true*/
    };
    /*this.onClickMe = this.onClickMe.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);*/
    //this.isSearched = this.isSearched.bind(this);
  }

  /*adicionaa = () => {
    if(!this.state.pausa) {
      this.setState({number:this.state.number + 1})
    } else {
      return null
    }
  };

  adicionar = () => {
  if(!this.state.pausa){
    this.setState({number:this.state.number < 10 ? this.state.number + 1 : this.state.number + 2 })
  } else {
    return null
  }
  };

  pausar = () => {
    this.setState({pausa: true})
  };

  voltar = () => {
    this.setState({pausa: false})
  };

  pausarVoltar = () => {
    this.setState (prevState => ({
      pausa: !prevState.pausa
    }))
  };

  //prev pega o estado anterior

  remover = () => {
    this.setState({numero : this.state.numero - 1})
  };
  adiciona = () => {
    this.setState({numero : this.state.numero + 1})
  };
  zerar = () => {
    this.setState({numero: this.state.numero = 0})
  }*/

  /*onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.lista.filter(isNotId);
    this.setState({ lista: updatedList });
    const updatedList = this.state.list.filter(function isNotId(item) {
      return item.objectID !== id;
    });
  }
  onClickMe() {
    console.log(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }*/

 /*isSearched(searchTerm) {
  return function(item) {
  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
}}*/

/*myButton = () => {
  this.setState({button: !this.state.button})
}*/


  render() {  

   /* const people = {
      istiName: 'PrimeiroNome',
      lastName: 'SobreNome'
    }
    const {istiName, lastName } = people;

    const arrayy = ['Ribeiro', 'Evelyn', 'Mendes'];
    const [ nameThree, nameOne, nameTwo ] = arrayy

    const { searchTerm, list } = this.state;*/
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <TestApi />
        {/*<p>{istiName + '  ' + lastName}</p>
        <p>{nameOne + ' ' + nameTwo + ' ' + nameThree }</p>

      <div className="page">
      <div className="interactions">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        </div>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
      <div className="botoes">
        {this.state.lista.map(item => 
          <div>
            <p>{item.nome}</p>
            <button onClick={() => this.onDismiss(item.objectID)} type="button">Dispensar</button>
          </div>
          )}
        <button
          onClick={this.onClickMe}
          type="button"
        >
          Click Me
        </button>
        <input type="button" value="MyBytton" 
          onChange={this.onSearchChange}
          style={{backgroundColor: this.state.button === true ? 'black' : 'red'}}
          onClick={this.myButton}
        />
        <form>
          <input type="text" 
          onChange={this.onSearchChange}/>
        </form>
        {this.state.lista.map(item => {
          const onHandleDismiss = () =>
            this.onDismiss(item.objectID);
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.nome}</span>
              <span>{item.sobrenome}</span>
              <span>
                <button
                  onClick={onHandleDismiss}
                  type="button"
                >
                 Dismiss
                </button>
              </span>
              <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                OutraForma
              </button>
              </span>
            </div>
            );
            }
            )}
            </div>

            <form>
            <input
              type="text"
              value={searchTerm}
              onChange={this.onSearchChange}
            />
            </form>*/}
        


          {/*<button className="botoes-texto" onClick={this.adicionaa}> Adicionar 1 em 1 </button>
          <button className="botoes-texto" onClick={this.adicionar}> Adicionar 2 depois de 10 </button>
        <h2 className="botoes-number" >{this.state.number}</h2>
          <button className="botoes-texto2" onClick={this.pausar}> Pausar </button>
          <button className="botoes-texto2" onClick={this.voltar}> Voltar </button>
          <button className="botoes-texto2" onClick={this.pausarVoltar}> Pausar & Voltar </button>
        </div>
        <p>----------------------------------------------------------------</p>
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
          <p>oi</p>*/}
       </div>
    );
  }
}

export default App;

