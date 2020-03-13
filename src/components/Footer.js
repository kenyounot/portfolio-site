import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Footer() {
	return (
		<footer className='mt-5'>
			<Container fluid={true}>
				<Row className='border-top justify-content-center p-3'>
					<Col className='p-0' md={3} sm={12}>
						<p>Made by Ken Spatta 2020</p>
					</Col>
					<Col className='p-0' md={3} sm={12}>
						<a
							href='https://linkedin.com/in/kenneth-spatta'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-linkedin fa-lg'></i>
						</a>
						<a
							href='https://github.com/kenyounot'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-github fa-lg'></i>
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
