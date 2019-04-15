import React, { Component } from 'react';
import logo from './logo.svg';

class ClassesES6 extends Component {

  constructor(firstName, lastName){
    this.firstname = firstname;
    this.lastname = lastname;
    

    getName() {
    return this.firstname + ' ' + this.lastname;
      
    };
    }

  render() {  
    const robin = new Developer('Robin', 'Wieruch');
    console.log(robin.getName());
    return (
      <div className="App">
        <header className="App-header">
        </header>

       </div>
    );
    }
  }
}

export default ClassesES6;