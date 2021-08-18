// const loginUserForm = document.querySelector('form#loginUserForm');
// const registerProductForm = document.querySelector('form#registerProductForm');
// const editProductForm = document.querySelector('form#editProductForm');

// Validación del formulario de registro de usuario

let registerUserForm = document.querySelector('form#registerUserForm');
let emailField = registerUserForm.email;
let userField = registerUserForm.name;
let avatarField = registerUserForm.avatar_image;
let pwdField = registerUserForm.password;
let submitBtn = document.querySelector('.boton-registrar button');

let isEmpty = (field) => {
	return field.value.trim().length === 0;
};

registerUserForm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (isEmpty(emailField) != '' || isEmpty(userField) != '' || isEmpty(pwdField) != '') {
		alert('Los campos no pueden estar vacíos');
	} else {
		registerUserForm.submit();
	}
});
