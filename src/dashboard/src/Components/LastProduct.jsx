import React from 'react';
import { useEffect, useState } from "react";

function LastProduct() {
    
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
                {item.name}
            </li>
        )).reverse()}
    </ul>
    )
}

export default LastProduct;
