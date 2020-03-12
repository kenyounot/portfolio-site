import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

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
				<Container className='p-0' fluid={true}>
					<Navbar
						className='border-bottom'
						bg='transparent'
						expand='lg'
					>
						<Navbar.Brand>Kenneth Spatta</Navbar.Brand>

						<Navbar.Toggle aria-controls='navbar-toggle' />

						<Navbar.Collapse id='navbar-toggle'>
							<Nav className='ml-auto'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
								<Link
									className='nav-link'
									to='/about'
								>
									About
								</Link>
								<Link
									className='nav-link'
									to='/contact'
								>
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</Router>
		);
	}
}

export default App;
