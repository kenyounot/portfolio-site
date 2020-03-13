import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import bookstack from '../assets/images/bookstack.jpeg';
import maintenancetracker from '../assets/images/maintenancetracker.jpeg';

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					id: 0,
					title: 'BookStack',
					imgSrc: bookstack,
					link: 'bookstackapi.herokuapp.com',
					selected: false
				},

				{
					id: 1,
					title: 'Maintenance Tracker',
					imgSrc: maintenancetracker,
					link: 'github.com/kenyounot',
					selected: false
				}
			]
		};
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach(item => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	};

	makeItems = items => {
		return items.map(item => {
			return (
				<Card
					item={item}
					onClick={e => this.handleCardClick(item.id, e)}
					key={item.id}
				/>
			);
		});
	};

	render() {
		return (
			<Container fluid={true}>
				<Row className='justify-content-around'>
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}

export default Carousel;
