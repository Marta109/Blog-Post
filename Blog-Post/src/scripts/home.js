function createHomeLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement(
        'a',
        { class: 'btn btn-primary', href: '../../index.html' },
        'Sign In',
      ),
      UI.createElement(
        'a',
        { class: 'btn btn-primary', href: './registration.html' },
        'Sign Up',
      ),
      UI.createElement(
        'button',
        { class: 'toggle-theme btn btn-dark' },
        'theme',
      ),
    ]),
    UI.createElement('main', { class: 'main-section' }, [
      UI.createElement('nav', { class: 'sidebar' }, 'sidebar'),
      // UI.createElement('div', { class: 'section' }, [
      UI.createElement('section', { class: 'box' }, 'section'),
      UI.createElement('section', { class: 'box' }, 'section'),
      createFooter(),
      // ]),
    ]),
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
  const section = document.querySelector('div.section');

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector('div.section'));
}, 1000);

createHomeLayout();

const toggleBtn = document.querySelector('.toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
