import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
				title: 'Stay Motivated',
				subtitle: 'Solving real world problems with code',
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
						<Navbar.Brand>Ken Spatta</Navbar.Brand>

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

					<Route
						exact
						path='/'
						render={() => (
							<HomePage
								title={this.state.home.title}
								subTitle={this.state.home.subtitle}
								text={this.state.home.text}
							/>
						)}
					/>

					<Route
						exact
						path='/about'
						render={() => (
							<AboutPage
								title={this.state.about.title}
							/>
						)}
					/>

					<Route
						exact
						path='/contact'
						render={() => (
							<ContactPage
								title={this.state.contact.title}
							/>
						)}
					/>

					<Footer />
				</Container>
			</Router>
		);
	}
}

export default App;
