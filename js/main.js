(() => {
  const formEl = document.querySelector('.js-form');
  const emailInputEl = document.querySelector('.js-email-input');
  const invalidEmailAlertEl = document.querySelector('.js-invalid-email-alert');

  formEl.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    const email = emailInputEl.value;

    if (!email || !isValidEmail(email)) {
      emailInputEl.classList.add('header__form__input--error');
      invalidEmailAlertEl.classList.remove('header__form__alert--hidden');
      emailInputEl.focus();
      return;
    }

    emailInputEl.classList.remove('header__form__input--error');
    invalidEmailAlertEl.classList.add('header__form__alert--hidden');
    return;
  }

  function isValidEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
})();
