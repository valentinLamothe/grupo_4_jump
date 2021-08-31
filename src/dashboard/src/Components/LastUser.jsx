import React from 'react';
import { useEffect, useState } from "react";

function LastUser() {
    
    const [users, setUsers] = useState([]);

	const getData = async () => {
		const data = await fetch('http://localhost:3000/api/users');
		const api = await data.json();
		setUsers(api.users);
	};

	useEffect(() => {
		getData();
	}, []);
    
    
    return (
        <ul>
        {users.map((item) => (
            <li key="item.id">
                {item.name}
            </li>
        )).reverse()}
    </ul>
    )
}

export default LastUser;
