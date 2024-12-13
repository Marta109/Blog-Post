import Storage from '../../data/storage.js';
import { createNotification } from '../notification/createNotification.js';
import RedirectHandler from '../redirection/redirectHandler.js';
import Validation from '../validation/validation.js';

const loginForm = document.querySelector('.login-container form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const password = formData.get('password');

  const user = {
    username: username,
    name: 'Jon',
    surName: 'Smith',
    email: 'j@example.com',
    loggedIn: true,
    lastLoggedIn: new Date(),
  };

  try {
    Validation.signInValidation(username, password);
    Storage.setUserData(user);
    RedirectHandler.signInHandler();
  } catch (error) {
    createNotification('error', error.message);
    console.error(error);
  }
});
