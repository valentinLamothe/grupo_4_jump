import React from 'react';
import { useEffect, useState } from 'react';

function List(props) {
	const [products, setProducts] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/products');
		const api = await data.json();
		setProducts(api.products);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="card">
			<h3>{props.title}</h3>
			{props.children}
		</div>
	);
}

export default List;
