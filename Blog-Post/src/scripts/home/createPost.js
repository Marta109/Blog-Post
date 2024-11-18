import createHeader from '../header/createHeader.js';
import { createFooter, updateFooter } from '../footer/createFooter.js';
import { toggleThem, logOutHandler } from '../header/headerBtnHandlers.js';

const createNewPostLayout = () => {
  const container = UI.createElement('div', { class: 'container-root' }, [
    createHeader(
      [
        { name: 'Home', href: './home.html' },
        {
          name: 'Log Out',
          id: 'log-out',
          href: '#',
        },
      ],
      true,
    ),
    UI.createElement('section', { class: 'create-post-container' }, [
      UI.createElement('h2', { class: 'text-center' }, 'Create a New Post'),
      //...Create Post Form Here...
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
};

setInterval(() => {
  updateFooter();
}, 1000);

createNewPostLayout();
toggleThem();
logOutHandler();
