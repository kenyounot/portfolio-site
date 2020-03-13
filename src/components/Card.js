import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {
	return (
		<div
			className='k-inline-block k-card'
			onClick={() => props.click(props.item)}
		>
			<img
				className='k-card-img'
				src={props.item.imgSrc}
				alt={props.item.imgSrc}
			/>

			{props.item.selected && (
				<CardInfo
					title={props.item.title}
					subTitle={props.item.subTitle}
					tech={props.item.tech}
					link={props.item.link}
				/>
			)}
		</div>
	);
}

export default Card;
