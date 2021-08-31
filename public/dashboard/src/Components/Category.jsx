import React from 'react';
import { useEffect, useState } from 'react';

function Category() {
	const [categories, setCategories] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/products');
		const api = await data.json();
		setCategories(api.countByCategory);
	};

	useEffect(() => {
		getData();
	}, []);

	return <div>{categories.length}</div>;
}
export default Category;
