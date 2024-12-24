import UI from '../../utils/utils.js';
import isEmptyDate from '../../../../data/startData/isEmptyDate.js';

const createPosts = async () => {
  try {
    const data = await isEmptyDate();
    if (!data || data.length === 0) return [];

    const elements = data.map((el) =>
      UI.createElement('section', { class: 'box' }, [
        UI.createElement('div', { class: 'card', id: el.id }, [
          UI.createElement('div', { class: 'post-btn-container ' }, [
            UI.createElement(
              'button',
              { class: 'toggle-theme btn btn-dark', id: 'delete-post' },
              [UI.createElement('i', { class: 'fa-solid fa-trash' })],
            ),
            UI.createElement(
              'button',
              { class: 'toggle-theme btn btn-dark', id: 'update-post' },
              [
                UI.createElement('i', {
                  class: 'fa-solid fa-pencil',
                }),
              ],
            ),
          ]),
          UI.createElement('div', { class: 'card-body' }, [
            UI.createElement('div', { class: 'card-descr' }, [
              UI.createElement('div', { class: 'card-title h5' }, el.title),
              UI.createElement(
                'div',
                { class: 'card-subtitle h4' },
                el.authorName,
              ),
            ]),
            UI.createElement('p', { class: 'card-text' }, el.story),
          ]),
          UI.createElement('img', {
            src: el.img,
            class: 'card-img-bottom',
            alt: el.title,
          }),
        ]),
      ]),
    );

    return elements;
  } catch (error) {
    console.error('Error  createPosts:', error.message);
    return [];
  }
};

export default createPosts;
