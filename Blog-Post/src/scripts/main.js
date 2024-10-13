const createContainer = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container-root');
  return container;
};

function createLoginLayout() {
  const container = createContainer();

  const header = document.createElement('header');
  header.setAttribute('class', 'header');

  const link = document.createElement('a');
  link.setAttribute('href', 'src/pages/home.html');
  link.innerText = 'Home';

  const link1 = document.createElement('a');
  link1.setAttribute('href', 'src/pages/registration.html');
  link1.innerText = 'registration';

  const formWrapper = document.createElement('div');
  formWrapper.setAttribute('class', 'form-wrapper');

  const loginContainer = document.createElement('div');
  loginContainer.setAttribute('class', 'login-container');

  const form = document.createElement('form');

  const inputUsername = document.createElement('input');
  inputUsername.setAttribute('type', 'text');
  inputUsername.setAttribute('placeholder', 'Username');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Password');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('type', 'submit');
  buttonLogin.innerText = 'Login';

  header.append(link, link1);

  // Form
  form.appendChild(inputUsername);
  form.appendChild(inputPassword);
  form.appendChild(buttonLogin);

  loginContainer.appendChild(form);

  formWrapper.appendChild(loginContainer);

  container.appendChild(header);
  container.appendChild(formWrapper);

  document.body.appendChild(container);
}

createLoginLayout();
