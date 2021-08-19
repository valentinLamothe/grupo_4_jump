// const loginUserForm = document.querySelector('form#loginUserForm');
// const registerProductForm = document.querySelector('form#registerProductForm');
// const editProductForm = document.querySelector('form#editProductForm');

// Validación del formulario de registro de usuario

// Capturamos el formulario
const registerUserForm = document.querySelector('form#registerUserForm');

// Capturamos los inputs del formulario
const emailField = registerUserForm.email;
const userField = registerUserForm.name;
const avatarField = registerUserForm.avatar_image;
const passwordField = registerUserForm.password;
const submitBtn = document.querySelector('.boton-registrar button');

// Validamos el formulario con la función checkInputs() y evitamos que se envíe con un preventDefault()
registerUserForm.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

// Función que valida los inputs
function checkInputs() {
	// Obtenemos los values de los inputsy les hacemos trim() para eliminar los espacios en blanco
	const emailValue = emailField.value.trim();
	const userValue = userField.value.trim();
	const passwordValue = passwordField.value.trim();

	if (emailValue === '') {
		showErrorFor(emailField, 'El email no puede estar vacío');
		return false;
	} else if (!isEmail(emailValue)) {
		showErrorFor(emailField, 'No es un email válido');
		return false;
	} else {
		showSuccessFor(emailField);
	}

	if (userValue === '') {
		showErrorFor(userField, 'El nombre de usuario no puede estar vacío');
		return false;
	} else {
		showSuccessFor(userField);
	}

	if (passwordValue === '') {
		showErrorFor(passwordField, 'La contraseña no puede estar vacía');
		return false;
	} else {
		showSuccessFor(passwordField);
	}

	registerUserForm.submit();
}

// Función que muestra los mensajes de error
function showErrorFor(input, message) {
	let formField = input.parentElement;
	let small = formField.querySelector('small.err');
	formField.className = 'form-field error';
	small.innerText = message;
}

// Función que muestra el mensaje de success
function showSuccessFor(input) {
	let formField = input.parentElement;
	formField.className = 'form-field success';
}

// Función que verifica que el campo no esté vacío
function isEmpty(field) {
	return field.value.trim().length === 0;
}

// Función que verifica que sea un email válido
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
