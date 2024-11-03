import createBloggerCard from './createBloggerCard.js';
import createPosts from './createPosts.js';
import { createFooter, updateFooter } from '../footer/footer.js';

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
        'Theme',
      ),
    ]),
    UI.createElement('main', { class: 'main-section' }, [
      UI.createElement('nav', { class: 'sidebar' }, [
        UI.createElement('div', { class: 'container' }, [
          ...createBloggerCard(),
        ]),
      ]),
      UI.createElement('div', { class: 'section' }, [
        ...createPosts(),
        createFooter(),
      ]),
    ]),
  ]);

  UI.render(container, document.body);
}

setInterval(() => {
  updateFooter();
}, 1000);

createHomeLayout();

const toggleBtn = document.querySelector('.toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
