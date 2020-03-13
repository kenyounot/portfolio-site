import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import bookstack from '../assets/images/bookstack.jpeg';
import maintenancetracker from '../assets/images/maintenancetracker.jpeg';
import surftackle from '../assets/images/surftackle.jpeg';
import surflog from '../assets/images/surflog.jpeg';
import movie from '../assets/images/movie.jpeg';

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
					tech:
						'JavaScript, React, Redux, Ruby, Rails, Postgresql, JWT',
					imgSrc: bookstack,
					link: 'http://bookstackapi.herokuapp.com',
					selected: false
				},

				{
					id: 1,
					title: 'Maintenance Tracker',
					subTitle:
						'an app to keep track of the maintenance of your vehicles',
					tech:
						'JavaScript, React, Redux, Ruby, Rails, Postgresql, JWT',
					imgSrc: maintenancetracker,
					link:
						'http://github.com/kenyounot/maintenance-tracker',
					selected: false
				},

				{
					id: 2,
					title: 'Surf Tackle',
					subTitle:
						'an app for users to add their favorite fishing tackle, and write reviews about it',
					tech:
						'Ruby, Ruby on Rails, Sqlite3, ActiveRecord, Bcrypt',
					imgSrc: surftackle,
					link: 'https://github.com/kenyounot/surf-tackle',
					selected: false
				},

				{
					id: 3,
					title: 'Fishagram',
					subTitle:
						'a place for people to post fishing pictures',
					tech:
						'Vanilla JavaScript, Ruby on Rails API, Postgresql, ActiveStorage',
					imgSrc: surflog,
					link: 'https://github.com/kenyounot/fishagram',
					selected: false
				},

				{
					id: 4,
					title: 'Flixpick',
					subTitle:
						'an app that picks a random movie from the top 100 list from rottentomatoes of the genre of your choosing',
					tech: 'Ruby, Nokogiri',
					imgSrc: movie,
					link: 'https://github.com/kenyounot/flixpick',
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
