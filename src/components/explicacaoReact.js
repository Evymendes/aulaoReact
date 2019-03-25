import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function createMarkup() {
  return {__html: 'First &middot; Second'};
}

const list = [
{
	title: 'React',
	url: 'https://facebook.github.io/react/',
	author: 'Jordan Walke',
	num_comments: 3,
	points: 4,
	objectID: 0,
},
{
	title: 'Redux',
	url: 'https://github.com/reactjs/redux',
	author: 'Dan Abramov, Andrew Clark',
	num_comments: 2,
	points: 5,
	objectID: 1,
},
];

/*class Developer {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	getName() {
		return this.firstname + ' ' + this.lastname;
	}

	const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());
}*/
class TiposDeMap extends Component {

  render() {
  	const nome = 'Evelyn'
  	const sobrenome = 'Mendes'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {nome}{sobrenome}

        </header>
    	{list.map(function(item) {
			return <div>{item.title}</div>;
		})}

		{list.map(function(item) {
			return (
				<div>
					<span>
						<a href={item.url}>{item.title}</a>
					</span>
					<span>{item.author}</span>
					<span>{item.num_comments}</span>
					<span>{item.points}</span>
				</div>
			);
		})}


		{list.map(item => {
			return (
				<div key={item.objectID}>
					<span>
						<a href={item.url}>{item.title}</a>
					</span>
					<span>{item.author}</span>
					<span>{item.num_comments}</span>
					<span>{item.points}</span>
				</div>
			);
		})}


		{list.map(item =>
			<div key={item.objectID}>
				<span>
					<a href={item.url}>{item.title}</a>
				</span>
				<span>{item.author}</span>
				<span>{item.num_comments}</span>
				<span>{item.points}</span>
			</div>
		)}

// permitido
item => { ... }
// permitido
(item) => { ... }
// proibido
item, key => { ... }
// permitido
(item, key) => { ... }


Aplicando o mesmo raciocínio na sua aplicação, com a variável list e a propriedade do estado local
que compartilha do mesmo nome:
// ES5
this.state = {
list: list,
};
// ES6
this.state = {
list

Um outro atalho elegante é a declaração concisa de métodos em JavaScript ES6.React Básico

// ES5
var userService = {
getUserName: function (user) {
return user.firstname + ' ' + user.lastname;
},
};
// ES6
const userService = {
getUserName(user) {
return user.firstname + ' ' + user.lastname;
},
};

Por último, mas não menos importante, o uso de nomes computados de propriedades é permitido
em JavaScript ES6.
// ES5
var user = {
name: 'Robin',
};
// ES6
const key = 'name';
const user = {
[key]: 'Robin',
};

      </div>
    );
  }
}

export default TiposDeMap;
