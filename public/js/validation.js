// Validaciones generales

// USER REGISTER
if (document.body.classList.contains('register')) {
	// Swal.fire({
	// 	title: 'Estamos en la página de registro',
	// 	confirmButtonColor: '#000'
	// });

	// Capturamos el formulario
	const registerForm = document.querySelector('form#registerForm');

	// Capturamos los inputs del formulario
	let user = registerForm.name;
	let email = registerForm.email;
	let avatar = registerForm.avatar_image;
	let password = registerForm.password;
	let password2 = registerForm.password2;

	// extensiones permitidas para las imágenes
	let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

	// variable de validación
	let isFormValid = false;

	registerForm.addEventListener('submit', (e) => {
		e.preventDefault();
		checkInputs();
		if (isFormValid) {
			registerForm.submit();
		}
	});

	function checkInputs() {
		// trim para remover los espacios vacíos
		let userValue = user.value.trim();
		let emailValue = email.value.trim();
		let avatarValue = avatar.value.trim();
		let passwordValue = password.value.trim();
		let password2Value = password2.value.trim();

		// validación del nombre de usuario
		if (userValue === '') {
			setErrorFor(user, 'El usuario no puede estar vacío');
			isFormValid = false;
		} else if (userValue.length < 2) {
			setErrorFor(user, 'El usuario debe tener al menos 2 caracteres');
			isFormValid = false;
		} else {
			setSuccessFor(user);
			isFormValid = true;
		}

		// validación del email
		if (emailValue === '') {
			setErrorFor(email, 'El email no puede estar vacío');
			isFormValid = false;
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'No es un email válido');
			isFormValid = false;
		} else {
			setSuccessFor(email);
			isFormValid = true;
		}

		// validación de la imagen de usuario
		if (avatarValue === '') {
			setErrorFor(avatar, 'Debe subir una imagen');
			isFormValid = false;
		} else if (!allowedExtensions.exec(avatarValue)) {
			setErrorFor(avatar, 'Las extensiones permitidas son JPG, JPEG, PNG o GIF');
			isFormValid = false;
		} else {
			setSuccessFor(avatar);
			isFormValid = true;
		}

		// validación de la contraseña
		if (passwordValue === '') {
			setErrorFor(password, 'La contraseña no puede estar vacía');
			isFormValid = false;
		} else if (passwordValue.length < 8) {
			setErrorFor(password, 'La contraseña debe tener al menos 8 caracteres');
			isFormValid = false;
		} else if (!isValidPassword(passwordValue)) {
			setErrorFor(password, 'La contraseña debe contener al menos un numero, un símbolo, una letra mayuscula y una letra minuscula');
			isFormValid = false;
		} else {
			setSuccessFor(password);
			isFormValid = true;
		}
		// validación de la confirmación de la contraseña
		if (password2Value === '') {
			setErrorFor(password2, 'La contraseña no puede estar vacía');
			isFormValid = false;
		} else if (passwordValue !== password2Value) {
			setErrorFor(password2, 'Las contraseñas no coinciden');
			isFormValid = false;
		} else {
			setSuccessFor(password2);
			isFormValid = true;
		}
	}
}

// LOGIN REGISTER
if (document.body.classList.contains('login')) {
	// Swal.fire({
	// 	title: 'Estamos en la página de login',
	// 	confirmButtonColor: '#000'
	// });

	// Capturamos el formulario
	const loginForm = document.querySelector('form#loginForm');

	// Capturamos los inputs del formulario
	let email = loginForm.email;
	let password = loginForm.password;

	// variable de validación
	let isFormValid = false;

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		checkInputs();
		if (isFormValid) {
			loginForm.submit();
		}
	});

	function checkInputs() {
		// trim para remover los espacios vacíos
		let emailValue = email.value.trim();
		let passwordValue = password.value.trim();

		// validación del email
		if (emailValue === '') {
			setErrorFor(email, 'El email no puede estar vacío');
			isFormValid = false;
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'No es un email válido');
			isFormValid = false;
		} else {
			setSuccessFor(email);
			isFormValid = true;
		}

		// validación de la contraseña
		if (passwordValue === '') {
			setErrorFor(password, 'La contraseña no puede estar vacía');
			isFormValid = false;
		} else if (passwordValue.length < 8) {
			setErrorFor(password, 'La contraseña debe tener al menos 8 caracteres');
			isFormValid = false;
		} else if (!isValidPassword(passwordValue)) {
			setErrorFor(password, 'La contraseña debe contener al menos un numero, un símbolo, una letra mayuscula y una letra minuscula');
			isFormValid = false;
		} else {
			setSuccessFor(password);
			isFormValid = true;
		}
	}
}

// CREATE PRODUCT
if (document.body.classList.contains('create')) {
	// Swal.fire({
	// 	title: 'Estamos en la página de creación de producto',
	// 	confirmButtonColor: '#000'
	// });

	// Capturamos el formulario
	const createForm = document.querySelector('form#newProduct');

	// Capturamos los inputs del formulario
	let name = createForm.name;
	let description = createForm.description;
	let image = createForm.image;
	let category = createForm.category;
	let size = createForm.size;
	let brand = createForm.brand;
	let price = createForm.price;

	// extensiones permitidas para las imágenes
	let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

	// variable de validación
	let isFormValid = false;

	createForm.addEventListener('submit', (e) => {
		e.preventDefault();
		checkInputs();
		if (isFormValid) {
			createForm.submit();
		}
	});

	function checkInputs() {
		// trim para remover los espacios vacíos
		let nameValue = name.value.trim();
		let descriptionValue = description.value.trim();
		let imageValue = image.value.trim();
		let priceValue = price.value.trim();

		let categoryValue = category.value.trim();
		let sizeValue = size.value.trim();
		let brandValue = brand.value.trim();

		// validación del nombre del producto
		if (nameValue === '') {
			setErrorFor(name, 'El nombre del producto no puede estar vacío');
			isFormValid = false;
		} else if (nameValue.length < 5) {
			setErrorFor(name, 'El nombre del producto debe tener al menos 5 caracteres');
			isFormValid = false;
		} else {
			setSuccessFor(name);
			isFormValid = true;
		}

		// validación de la descripción del producto
		if (descriptionValue === '') {
			setErrorFor(description, 'La descripción del producto no puede estar vacía');
			isFormValid = false;
		} else if (descriptionValue.length < 20) {
			setErrorFor(description, 'La descripción del producto debe tener al menos 20 caracteres');
			isFormValid = false;
		} else {
			setSuccessFor(description);
			isFormValid = true;
		}

		// validación de la imagen del producto
		if (imageValue === '') {
			setErrorFor(image, 'Debe subir una imagen');
			isFormValid = false;
		} else if (!allowedExtensions.exec(imageValue)) {
			setErrorFor(image, 'Las extensiones permitidas son JPG, JPEG, PNG o GIF');
			isFormValid = false;
		} else {
			setSuccessFor(image);
			isFormValid = true;
		}

		// validación del precio del producto
		if (priceValue === '') {
			setErrorFor(price, 'Debe ingresar un precio para el producto');
			isFormValid = false;
		} else if (priceValue == 0) {
			setErrorFor(price, 'El precio del producto no puede ser $0');
			isFormValid = false;
		} else {
			setSuccessFor(price);
			isFormValid = true;
		}
	}
}

// EDIT PRODUCT
if (document.body.classList.contains('edit')) {
	// Swal.fire({
	// 	title: 'Estamos en la página de edición de producto',
	// 	confirmButtonColor: '#000'
	// });

	// Capturamos el formulario
	const editForm = document.querySelector('form#editProduct');

	// Capturamos los inputs del formulario
	let name = editForm.name;
	let description = editForm.description;
	let image = editForm.image;
	let price = editForm.price;
	let category = editForm.category;
	let size = editForm.size;
	let brand = editForm.brand;

	// extensiones permitidas para las imágenes
	let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

	// variable de validación
	let isFormValid = false;

	editForm.addEventListener('submit', (e) => {
		e.preventDefault();
		checkInputs();
		if (isFormValid) {
			editForm.submit();
		}
	});

	function checkInputs() {
		// trim para remover los espacios vacíos
		let nameValue = name.value.trim();
		let descriptionValue = description.value.trim();
		let imageValue = image.value.trim();
		let priceValue = price.value.trim();

		let categoryValue = category.value.trim();
		let sizeValue = size.value.trim();
		let brandValue = brand.value.trim();

		// validación del nombre del producto
		if (nameValue === '') {
			setErrorFor(name, 'El nombre del producto no puede estar vacío');
			isFormValid = false;
		} else if (nameValue.length < 5) {
			setErrorFor(name, 'El nombre del producto debe tener al menos 5 caracteres');
			isFormValid = false;
		} else {
			setSuccessFor(name);
			isFormValid = true;
		}

		// validación de la descripción del producto
		if (descriptionValue === '') {
			setErrorFor(description, 'La descripción del producto no puede estar vacía');
			isFormValid = false;
		} else if (descriptionValue.length < 20) {
			setErrorFor(description, 'La descripción del producto debe tener al menos 20 caracteres');
			isFormValid = false;
		} else {
			setSuccessFor(description);
			isFormValid = true;
		}

		// validación de la imagen del producto
		if (imageValue === '') {
			setErrorFor(image, 'Debe subir una imagen');
			isFormValid = false;
		} else if (!allowedExtensions.exec(imageValue)) {
			setErrorFor(image, 'Las extensiones permitidas son JPG, JPEG, PNG o GIF');
			isFormValid = false;
		} else {
			setSuccessFor(image);
			isFormValid = true;
		}

		// validación del precio del producto
		if (priceValue === '') {
			setErrorFor(price, 'Debe ingresar un precio para el producto');
			isFormValid = false;
		} else if (priceValue == 0) {
			setErrorFor(price, 'El precio del producto no puede ser $0');
			isFormValid = false;
		} else {
			setSuccessFor(price);
			isFormValid = true;
		}
	}
}

// Funciones generales de validación de campos
function setErrorFor(field, message) {
	const error = field.nextElementSibling;
	error.innerHTML = message;
	field.classList.remove('is-valid');
	field.classList.add('is-invalid');
}

function setSuccessFor(field) {
	const error = field.nextElementSibling;
	field.classList.remove('is-invalid');
	field.classList.add('is-valid');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPassword(password) {
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}/.test(password);
}
