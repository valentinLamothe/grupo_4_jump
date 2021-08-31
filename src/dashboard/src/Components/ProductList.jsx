import React from 'react';
import { useEffect, useState } from 'react';

function ProductList(props) {
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
		<ul>
			{products.map((item) => (
				<li key="item.id">
					<img src={`http://localhost:3000/img/productos/${item.image}`} alt={item.name} />
					<span class="name">{item.name}</span>
					<span class="price">${item.price}</span>
				</li>
			))}
		</ul>
	);
}

export default ProductList;
