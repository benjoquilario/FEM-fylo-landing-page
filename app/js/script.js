const forms = document.querySelectorAll('.js-form');
const errorMessage = document.querySelectorAll('.hero__form--error');
const emailInput = document.querySelector('.js-email');
const btnCta = document.querySelector('.btn--cta');

const validateEmail = (email) => {
  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

function setFormState(input, errorMessage, className, message) {
  input.classList.add(className);
  errorMessage.classList.add(className);
  errorMessage.textContent = message;
  errorMessage.style.animation = 'errorPop 350ms ease';

  setTimeout(() => {
    input.className.remove('error', 'success');
    errorMessage.classList.remove('error', 'sucess');
    errorMessage.style.animation = 'none';
  }, 3000);
}

function checkEmail(event) {
  event.preventDefault();
  const input = event.target.email;
  const errorMessage = input.nextElementSibling;
  if (!validateEmail(input.value)) {
    setFormState(input, errorMessage, 'error', 'Invalid Email, Please check your email');
  } else {
    setFormState(input, errorMessage, 'success', 'Email Successfully Submitted');
  }
}
forms.forEach((form) => {
  form.addEventListener('submit', (event) => checkEmail(event));
});
