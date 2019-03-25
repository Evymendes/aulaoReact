import React, { Component } from 'react';
import axios from 'axios';

class TestApi extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			persons: []
		}
	}

	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`)
		.then(res => {
			const persons = res.data;
			this.setState({ persons });
			console.log(res);
			console.log(res.data);
		})
	}

	handleChange = (event) => {
		this.setState({ name: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault();

		const user = { user: this.state.name}

    axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    	.then(res => {
    		user
        console.log(res);
        console.log(res.data);
    	})
	  }

  render() {  
    return (
      <div >
      	<label onSubmit={this.handleSubmit}>
      		<p>Digit your name:</p>
      		<input type="text" name='name' onChange={this.handleChange}/>
      	</label>
          <button type="submit">Add</button>
      	<ul>
      		{this.state.persons.map(person => <li>{person.name}</li>)}
      	</ul>
      	<p>{this.state.name}</p>
      </div>
    );
  }
}

export default TestApi;