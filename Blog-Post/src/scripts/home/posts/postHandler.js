import PostApi from '../../../../data/postApi.js';
// import createUpdatePost from '../updatePost/createUpdatePost.js';
import getOldPostData from '../updatePost/getOldPostData.js';

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

      PostApi.deletePost(+elem.id).then(() => {
        parent.classList.add('hidden');
      });
    } else if (
      e.target.id === 'update-post' ||
      e.target.classList.contains('fa-pencil')
    ) {
      const elem = e.target.closest('.card');
      getOldPostData(elem);

      // PostApi.getPostById(id).then((data) => {
      // createUpdatePost(data)
      // });
    } else return;
  });
};

export default postHandler;
