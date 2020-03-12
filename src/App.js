import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
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
			}
		};
	}
	render() {
		return <div></div>;
	}
}
