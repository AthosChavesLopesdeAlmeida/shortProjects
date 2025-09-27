const postalCode = document.getElementById('postalCode');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');
const Btn = document.getElementById('botao');
const form = document.getElementsByTagName('form')[0];
let errorMsg = document.getElementById('errorMsg');




function validateCEP () {
  let cepIsValid = false 
  if (!postalCode.checkValidity()) {
    errorMsg.innerHTML = 'CEP inválido. Formato esperado: XXXXX-XXX';
    form.style.border = '1px solid red';
  } else {
    cepIsValid = true
    errorMsg.innerHTML = ''
    form.style.border = ''
  }
  return cepIsValid
}




function validateEmail () {
  let emailIsValid = false
  if (!email.checkValidity()) {
    errorMsg.innerHTML = 'Email Inválido'
    form.style.border = '1px solid red'
  } else {
    emailIsValid = true
    errorMsg.innerHTML = ''
    form.style.border = ''
  }
  return emailIsValid
}




function validatePassword () {
  let passwordIsValid = false
  if (password.value.length < 8 || password.value.length > 16) {
    errorMsg.innerHTML = 'A senha deve ter entre 8 e 16 caracteres';
    form.style.border = '1px solid red';
  } else {
    passwordIsValid = true
    errorMsg.innerHTML = ''
    form.style.border = ''
  }
  return passwordIsValid
}



function validateConfirmation () {
  let confirmationIsValid = false
  if (confirmation.value !== password.value) {
    errorMsg.innerHTML = 'As senhas não coincidem'
    form.style.border = '1px solid red'
  } else {
    confirmationIsValid = true
    errorMsg.innerHTML = ''
    form.style.border = ''
  }
  return confirmationIsValid
}




form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorMsg.innerHTML = ''

  const isCepValid = validateCEP();
  if (!isCepValid) return;

  const isEmailValid = validateEmail();
  if (!isEmailValid) return;

  const isPasswordValid = validatePassword();
  if (!isPasswordValid) return;

  const isConfirmationValid = validateConfirmation();
  if (!isConfirmationValid) return;

  if (isCepValid && isEmailValid && isPasswordValid && isConfirmationValid) {
    errorMsg.innerHTML = 'Tudo certo!'
    errorMsg.style.color = '#161685'
    form.style.border = '1px solid #161685'
  }
})

