import React from 'react';
import { useEffect, useState } from 'react';

function CategoryList(props) {
	const [categories, setCategories] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/products');
		const api = await data.json();
		setCategories(api.products);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<ul>
			{categories.map((item) => (
				<li key="item.id">{item.id_category}</li>
			))}
		</ul>
	);
}

export default CategoryList;
