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
					subTitle:
						'an app to keep track of the books you love',
					imgSrc: bookstack,
					link: 'http://bookstackapi.herokuapp.com',
					selected: false
				},

				{
					id: 1,
					title: 'Maintenance Tracker',
					subTitle:
						'an app to keep track of the maintenance of your vehicles',
					imgSrc: maintenancetracker,
					link:
						'http://github.com/kenyounot/maintenance-tracker',
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
					click={e => this.handleCardClick(item.id, e)}
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
