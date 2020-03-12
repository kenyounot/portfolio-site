import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Container from 'react-bootstrap';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Ken Spatta',
			headerLinks: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' }
			],
			home: {
				title: 'Be Relentless',
				subtitle: 'Projects that make a difference',
				text: 'Checkout my projects below'
			},
			about: {
				title: 'About Me'
			},
			contact: {
				title: "Let's Talk"
			}
		};
	}
	render() {
		return (
			<Router>
				<Container fluid='true'></Container>
			</Router>
		);
	}
}

export default App;
