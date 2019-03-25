import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Manipulacao extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            palavras: []
        }

    }
    manipularClique = (event) => {
        this.setState({
            palavras:this.state.temp,
            temp:''
        })   
 
    }
    boxText = (event) =>{
        this.setState({temp: event.target.value})
    }
    render = ()=>{
        const {palavras} = this.state
        return (
        <div>
        <input onChange={this.boxText}></input>
        <button onClick={this.manipularClique}>Não clique</button>
        <h1>{this.state.palavras}</h1>
        </div>
        )
    }
}
export default Manipulacao;