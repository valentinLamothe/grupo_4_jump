import React from 'react';

function Card(props) {
	return (
		<div className="overviewcard">
			<div className="overviewcard__icon">{props.title}</div>
			<div className="overviewcard__info">{props.children}</div>
		</div>
	);
}

export default Card;
