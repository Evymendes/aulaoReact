import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Palavras extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            text: '',
            palavrasMenoresOuIguaisA5:[],
            palavrasMaioresQue5:[]
        } 
        this.changeTextarea = this.changeTextarea.bind(this);
        this.separarPalavras = this.separarPalavras.bind(this);
    }
    separarPalavras(event){
        console.log(event)
        let pedacosDeTexto = this.state.text.split(' ');
        let palavras = pedacosDeTexto.map(function(item){
            return item.replace(',','').replace(',','');
        });
        this.setState({palavrasMenoresOuIguaisA5: palavras.filter( item => item.length <= 5 )});

        this.setState({palavrasMaioresQue5: palavras.filter( item => item.length > 5 )});

    }
    changeTextarea(event){
        this.setState({text:event.target.value});
        
    }
    render(){
        console.log(this.state);
        let template = <div>
            <textarea onChange={this.changeTextarea}></textarea><br/>
            <button onClick={this.separarPalavras}>Enviar</button>
            <h1>Palavras menores ou iguais a 5</h1>
            <ul>
                {this.state.palavrasMenoresOuIguaisA5.map(
                    item => <li>{item}</li>
                )}
            </ul>
            <h1>Palavras maiores que 5</h1>
            <ul>
                {this.state.palavrasMaioresQue5.map(
                    item => <li>{item}</li>
                )}
            </ul>
        </div>;
        return template;
    }
}
export default Palavras;