import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ola extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            line:'',
            palavras:[],
            segundaPalavra:[]
        }
    }
    openText = () => {
        this.setState({
            text:(`ola  ${this.state.palavras} `) ,
            line:(`como vai ${this.state.segundaPalavra} ?`) 
        })
        this.setState({
            palavras:this.state.temp,
            segundaPalavra:this.state.temp,
            temp:''
        })
    }
   
    boxText = (event) =>{
        this.setState({palavras: event.target.value})
    }
    boxText2 = (event) =>{
        this.setState({segundaPalavra: event.target.value})
    }
    render(){
        return(
            <div>
                <h1>Incira dois nomes</h1>
                <input onChange={this.boxText}></input>
                <input onChange={this.boxText2}></input>
                <button onClick={this.openText}>enviar nomes</button>
                <h1>{this.state.text}</h1>
                <h1>{this.state.line}</h1>
            </div>
        );
    }
}


export default Ola;


// class Ola extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             text: '',
//             line:'',
//             palavras:[],
//             segundaPalavra:[]
//         }
//     }
//     openText = () => {
//         this.setState({
//             text:(`ola  ${this.state.palavras} `) ,
//             line:(`como vai ${this.state.segundaPalavra} ?`) 
//         })
//         this.setState({
//             palavras:this.state.temp,
//             segundaPalavra:this.state.temp,
//             temp:''
//         })
//     }
   
//     boxText = (event) =>{
//         this.setState({palavras: event.target.value})
//     }
//     boxText2 = (event) =>{
//         this.setState({segundaPalavra: event.target.value})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Incira dois nomes</h1>
//                 <input onChange={this.boxText}></input>
//                 <input onChange={this.boxText2}></input>
//                 <button onClick={this.openText}>enviar nomes</button>
//                 <h1>{this.state.text}</h1>
//                 <h1>{this.state.line}</h1>
//             </div>
//         );
//     }
// }
// export default Ola;