import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
	return (
		<div>
			<Hero title={props.title} />

			<Content>
				<p>
					Hey! My name is Ken. I'm a full stack developer
					with experience in JavaScript, React, Node, Ruby,
					and Ruby on Rails
				</p>

				<p>
					I love to create things and apply my skills in
					problem solving, and communication to solve real
					world problems
				</p>

				<p>
					I'm currently in the design phase of a personal
					project that will solve a challenge the people in
					my favorite hobby "fishing" are looking to solve.
					I plan on using JS and React for the front end,
					and Node.js for the backend, with MongoDB for my
					data storage solution
				</p>

				<p>
					When I'm not learning new things, you can catch me
					on the beach fishing, or hanging with my family
				</p>
			</Content>
		</div>
	);
}

export default AboutPage;
