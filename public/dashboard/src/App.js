import React from 'react';
import './App.css';
import Product from './Components/Product';
import User from './Components/User';
import Category from './Components/Category';
import Card from './Components/Card';
import List from './Components/List';
import ProductList from './Components/ProductList';
import UserList from './Components/UserList';
import CategoryList from './Components/CategoryList';
import logoImg from './assets/logo.jpg';
import userImg from './assets/user.png';

function App() {
	return (
		<div className="App">
			<div className="grid-container">
				<header className="header">
					<h1>Dashboard</h1>
				</header>
				<aside className="sidenav">
					<img id="logo" src={logoImg} alt="JUMP" />
					<div className="sidenav__close-icon">
						<i className="fas fa-times sidenav__brand-close"></i>
					</div>
					<ul className="sidenav__list">
						<div className="header__avatar"></div>
						<li className="sidenav__list-item">
							<i className="fas fa-columns"></i> Dashboard
						</li>
						<li className="sidenav__list-item">
							<i className="fas fa-tshirt"></i> Productos
						</li>
						<li className="sidenav__list-item">
							<i className="fas fa-sitemap"></i> Categorías
						</li>
						<li className="sidenav__list-item">
							<i className="fas fa-user"></i> Usuarios
						</li>
						<li className="sidenav__list-item">
							<i className="fas fa-chart-line"></i> Estadísticas
						</li>
						<li className="sidenav__list-item">
							<i className="fas fa-store"></i> Volver a la tienda
						</li>
					</ul>
				</aside>
				<main className="main">
					<div className="main-header">
						<img src={userImg} alt="" />
						<div className="main-header__heading">
							¡Hola, <strong>admin</strong>!
						</div>
					</div>
					<div className="main-overview">
						<Card title="USUARIOS">
							<User />
						</Card>
						<Card title="PRODUCTOS">
							<Product />
						</Card>
						<Card title="CATEGORÍAS">
							<Category />
						</Card>
					</div>
					<div className="main-cards">
						<List title="Listado de Productos">
							<ProductList />
						</List>
						<List title="Listado de Usuarios">
							<UserList />
						</List>
						<List title="Listado de Categorías">
							<CategoryList />
						</List>
					</div>
					<div className="main-cards last-created">
						<List title="Último Producto"></List>
						<List title="Último Usuario"></List>
					</div>
				</main>
				<footer className="footer">
					<div className="copy">
						<p>JUMP Store © 2021 - Todos los derechos reservados</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
