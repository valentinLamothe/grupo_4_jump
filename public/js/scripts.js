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
	// Capturamos el formulario
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
}
