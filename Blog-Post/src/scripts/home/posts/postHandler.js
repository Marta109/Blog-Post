import DataApi from '../../../../data/data.js';

const postHandler = () => {
  const postWrapper = document.querySelector('main .section');
  postWrapper.addEventListener('click', (e) => {
    console.log(e.target);
    if (
      e.target.id === 'delete-post' ||
      e.target.classList.contains('fa-trash')
    ) {
      const elem = e.target.closest('.card');
      const parent = elem.closest('section');

      DataApi.deletePost(+elem.id).then((data) => {
        console.log(data);
        parent.classList.add('hidden');
      });
    } else if (
      e.target.id === 'update-post' ||
      e.target.classList.contains('fa-pencil')
    ) {
      const id = e.target.closest('.card').id;
      console.log('bbbb');
    } else return;
  });
};

export default postHandler;
