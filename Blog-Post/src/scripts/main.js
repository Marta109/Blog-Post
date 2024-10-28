function createLoginLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement(
        'a',
        { class: 'btn btn-primary', href: 'src/pages/registration.html' },
        'Sign up',
      ),
      UI.createElement(
        'a',
        { class: 'btn btn-primary', href: 'src/pages/home.html' },
        'Home',
      ),
      UI.createElement(
        'button',
        { class: 'toggle-theme btn btn-dark' },
        'theme',
      ),
    ]),
    UI.createElement('div', { class: 'form-wrapper' }, [
      UI.createElement('div', { class: 'login-container' }, [
        UI.createElement('form', {}, [
          UI.createElement('input', {
            type: 'text',
            required: true,
            placeholder: 'Username',
          }),
          UI.createElement('input', {
            type: 'password',
            required: true,
            placeholder: 'password',
          }),

          UI.createElement('button', { type: 'submit' }, 'submit'),
        ]),
      ]),
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
}

function createFooter() {
  return UI.createElement(
    'footer',
    { class: 'footer', id: 'time-footer' },
    Date().toString(),
  );
}

setInterval(() => {
  const section = document.querySelector('.container-root');

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector('.container-root'));
}, 1000);

createLoginLayout();

const toggleBtn = document.querySelector('.toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
