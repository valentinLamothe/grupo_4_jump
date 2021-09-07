
	let cart = JSON.parse(localStorage.getItem('cart')) || [];

	let button = document.querySelector('#addToCart');
	let carrito1 = document.querySelector('.fa-shopping-cart');

	
	button.addEventListener('click', (e) => {
		e.preventDefault()
		console.log('aniadido')
		cart.push(1)
		localStorage.setItem('carrito', JSON.stringify(cart))
		carrito1.innerText = cart.length;
		console.log(cart.length)
	})
