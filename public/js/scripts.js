// CARRITO
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// let button = document.querySelector('#addToCart');
// let carrito1 = document.querySelector('.fa-shopping-cart');

// button.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('aniadido');
// 	cart.push(1);
// 	localStorage.setItem('carrito', JSON.stringify(cart));
// 	carrito1.innerText = cart.length;
// 	console.log(cart.length);
// });

// FILTROS

if (document.body.classList.contains('products')) {
	// Redirección del filtro de marcas
	const brandFilter = document.querySelector('form#brandFilter');
	let brandSelected = 0;

	brandFilter.addEventListener('submit', (e) => {
		e.preventDefault();
		selectBrand();
	});

	function selectBrand() {
		let brandOptions = document.getElementById('brand');
		brandSelected = brandOptions.options[brandOptions.selectedIndex].value;

		if (brandSelected > 0) {
			window.location.href = '/products/brand/' + brandSelected;
		}
	}

	// Redirección del filtro de categorías
	const categoryFilter = document.querySelector('form#categoryFilter');
	let categorySelected = 0;

	categoryFilter.addEventListener('submit', (e) => {
		e.preventDefault();
		selectCategory();
	});

	function selectCategory() {
		let categoryOptions = document.getElementById('category');
		categorySelected = categoryOptions.options[categoryOptions.selectedIndex].value;

		if (categorySelected > 0) {
			window.location.href = '/products/category/' + categorySelected;
		}
	}
}
