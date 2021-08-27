const forms = document.querySelectorAll('.js-form');
const errorMessage = document.querySelectorAll('.hero__form--error');
const emailInput = document.querySelector('.js-email');
const btnCta = document.querySelector('.btn--cta');

const validateEmail = (email) => {
  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

function checkEmail(event) {
  event.preventDefault();
  for (let i = 0; i < errorMessage.length; i++) {
    if (!validateEmail(event.target.email.value)) {
      errorMessage[i].classList.add('error');
      event.target.email.classList.add('error');
      errorMessage[i].textContent = 'Invalid Email, Please check your email';
      errorMessage[i].style.animation = 'errorPop 350ms ease';
      setTimeout(() => {
        event.target.email.classList.remove('error');
        errorMessage[i].classList.remove('error');
        errorMessage[i].style.animation = 'none';
      }, 3000);
    } else {
      errorMessage[i].classList.add('success');
      event.target.email.classList.add('success');
      errorMessage[i].textContent = 'Email Sucessfully Submitted';
      errorMessage[i].style.animation = 'errorPop 350ms ease';
      setTimeout(() => {
        event.target.email.classList.remove('success');
        errorMessage[i].classList.remove('success');
        errorMessage[i].style.animation = 'none';
      }, 3000);
    }
  }
}

// function validateEmail(event) {
//   event.preventDefault();

//   // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   // for (let i = 0; i < errorMessage.length; i++) {
//   //   if (!emailInput.value.match(validRegex)) {
//   //     errorMessage[i].textContent = 'Invalid Email, Please check your email';
//   //     // emailInput.classList.add('error');?\
//   //     event.target.email.classList.add('error');
//   //     errorMessage[i].classList.add('error');
//   //     errorMessage[i].style.animation = 'errorPop 350ms ease';

//   //     setTimeout(() => {
//   //       emailInput.classList.remove('error');
//   //       errorMessage[i].classList.remove('error');
//   //       errorMessage[i].style.animation = 'none';
//   //     }, 4000);
//   //   } else {
//   //     event.target.email.classList.add('success');
//   //     errorMessage[i].classList.add('success');
//   //     errorMessage[i].textContent = 'Email Sucessfully Submitted';
//   //     errorMessage[i].style.animation = 'errorPop 350ms ease';

//   //     setTimeout(() => {
//   //       emailInput.classList.remove('success');
//   //       errorMessage[i].classList.remove('success');
//   //       errorMessage[i].style.animation = 'none';
//   //     }, 4000);
//   //   }
//   // }
// }
forms.forEach((form) => {
  form.addEventListener('submit', (event) => checkEmail(event));
});
