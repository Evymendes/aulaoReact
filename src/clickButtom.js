import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component{
  render(){
    return (
    <button onClick={() => {this.props.handleclick(this.props.label) }}>
      {this.props.label}
    </button>
    );
  }
}

class MyLabel extends Component{
  render(){
    console.log(this.props)
    return <p>Você clicou no botão: {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }

  
  render() {
    return (  
      <div className="App">
        <MyLabel text={this.state.labelText}/>
        <MyButton handleclick={this.setLabelText} label="Home"/>
        <MyButton handleclick={this.setLabelText} label="Forum"/>
        <MyButton handleclick={this.setLabelText} label="Games"/>
        <MyButton handleclick={this.setLabelText} label="Contacts"/>
      </div>
    );
  }
}

export default App;
