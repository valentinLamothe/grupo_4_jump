import React from 'react';
import { useEffect, useState } from 'react';

function UserList(props) {
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
					<img src={`http://localhost:3000/img/usersAvatars/${item.avatar_image}`} alt={item.name} />
					{item.name}
				</li>
			))}
		</ul>
	);
}

export default UserList;
