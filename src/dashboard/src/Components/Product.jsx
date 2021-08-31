import React from 'react';
import { useEffect, useState } from 'react';

function Product() {
	const [count, setCount] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/products');
		const api = await data.json();
		setCount(api.count);
	};

	useEffect(() => {
		getData();
	}, []);

	return <div>{count}</div>;
}
export default Product;
