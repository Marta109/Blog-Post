import createHeader from '../header/createHeader.js';
import { createFooter } from '../footer/createFooter.js';
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
    UI.createElement('div', { class: 'section' }, [
      //   ...createPosts(),
    ]),
    createFooter(),
  ]);
  UI.render(container, document.body);
};

createNewPostLayout();
toggleThem();
logOutHandler();
