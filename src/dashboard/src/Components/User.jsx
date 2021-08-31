import React from 'react';
import { useEffect, useState } from 'react';

function User() {
	const [content, setContent] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/users');
		const api = await data.json();
		setContent(api.count);
	};

	useEffect(() => {
		getData();
	}, []);

	return <div>{content}</div>;
}

export default User;
