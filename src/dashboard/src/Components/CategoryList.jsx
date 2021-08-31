import React from 'react';
import { useEffect, useState } from 'react';

function CategoryList(props) {
	const [categories, setCategories] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/products');
		console.log( data);
		const api = await data.json();
		setCategories(api.countByCategory);
		console.log(api.countByCategory);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<ul>
			{categories.map(category => (
				<li key="item.id">
					{Object.keys(category)}
				</li>
			))}
		</ul>
	)
}

export default CategoryList;
