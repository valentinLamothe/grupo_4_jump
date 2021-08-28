// const loginForm = document.querySelector('form#loginUserForm');
// const createProductForm = document.querySelector('form#registerProductForm');
// const editProductForm = document.querySelector('form#editProductForm');

// REGISTER FORM

// Capturamos el formulario
const registerForm = document.querySelector('form#registerUserForm');

// Capturamos los inputs del formulario
const user = registerForm.name;
const email = registerForm.email;
const avatar = registerForm.avatar_image;
const password = registerForm.password;
const password2 = registerForm.password2;

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
	const userValue = user.value.trim();
	const emailValue = email.value.trim();
	const avatarValue = avatar.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

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

	// validación de las contraseñas
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
