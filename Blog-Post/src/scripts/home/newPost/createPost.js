import UI from '../../utils/utils.js';
import createHeader from '../../header/createHeader.js';
// import Storage from '../../../../data/storage.js';
import { createFooter, updateFooter } from '../../footer/createFooter.js';
import { toggleThem, logOutHandler } from '../../header/headerBtnHandlers.js';
import { createNewPost } from './createPostHandler.js';
import previewImg from '../../utils/previewImg.js';

const createNewPostLayout = () => {
  // const user = Storage.getAccessToken();

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
      UI.createElement('div', { class: 'input-group mb-3  card' }, [
        UI.createElement(
          'div',
          { class: 'page-header  h1 fw-bold mb-0' },
          'Create a New Post',
        ),
        UI.createElement('div', { class: 'card' }, [
          UI.createElement('div', { class: 'card-body' }, [
            UI.createElement('div', { class: 'author-info input-group mb-3' }, [
              UI.createElement('span', { class: 'input-group-text' }, 'Author'),
              UI.createElement('input', {
                placeholder: 'Ethel Lilian',
                class: 'form-control',
                name: 'firstName',
                type: 'text',
                // value: user.name,
                // disabled: '',
              }),
              UI.createElement('input', {
                placeholder: 'Voynich',
                class: 'form-control',
                type: 'text',
                name: 'lastName',
                // value: user.surName,
                // disabled: '',
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement('span', { class: 'input-group-text' }, 'Title'),
              UI.createElement('input', {
                class: 'form-control',
                type: 'text',
                placeholder: 'Gadfly',
                name: 'title',
              }),
            ]),
            UI.createElement('div', { class: 'input-group mb-3' }, [
              UI.createElement('input', {
                class: 'form-control form-control-lg',
                type: 'file',
                name: 'fileUpload',
                id: 'fileUpload',
                required: true,
              }),
              UI.createElement('label', {
                class: 'form-label',
                for: 'fileUpload',
              }),
            ]),

            UI.createElement(
              'div',
              { class: 'input-group mb-3', id: 'previewImageWrapper' },
              [
                UI.createElement(
                  'span',
                  {
                    class: 'input-group-text',
                  },
                  'Image Preview',
                ),
                UI.createElement('img', {
                  class: 'form-control',
                  id: 'previewImage',
                  src: '',
                }),
              ],
            ),
            UI.createElement(
              'div',
              {
                class: 'form-outline story-container',
                'data-mdb-input-init': '',
              },
              [
                UI.createElement(
                  'label',
                  { class: 'form-control', for: 'story' },
                  'Story',
                ),
                UI.createElement('textarea', {
                  class: 'form-control',
                  type: 'text',
                  name: 'story',
                  placeholder:
                    'The Gadfly is a famous novel by English writer Ethel Lilian Voynich, which tells the story of a fight for freedom and ideals. The main character, Arthur Burton, goes through betrayal, personal losses, and a transformation from a naive young man into a courageous revolutionary known as the Gadfly. This is a story about self-sacrifice, inner strength, and love that deeply touches the soul with its tragedy.',
                }),
              ],
            ),
          ]),
        ]),
        UI.createElement('div', { class: 'm-3' }, [
          UI.createElement(
            'button',
            {
              'data-mdb-button-init': '',
              'data-mdb-ripple-init': '',
              class: 'btn btn-dark btn-lg btn-block',
              type: 'submit',
              id: 'create-post',
              required: 'true',
            },
            'Create',
          ),
        ]),
      ]),
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
};

setInterval(() => {
  updateFooter();
}, 1000);

createNewPostLayout();
previewImg();
toggleThem();
logOutHandler();
createNewPost();
