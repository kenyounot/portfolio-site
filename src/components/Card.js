import React from 'react';

function Card(props) {
	return (
		<div>
			<img
				className=''
				src={props.item.imgSrc}
				alt={props.item.imgSrc}
			/>

			{props.item.selected && (
				<CardInfo
					title={props.item.title}
					subTitle={props.item.subTitle}
				/>
			)}
		</div>
	);
}

export default Card;
