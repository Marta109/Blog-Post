import DataApi from '../data.js';
import { posts } from './startData.js';

const isEmptyDate = async function () {
  try {
    const data = await DataApi.getAllPosts();

    if (data.length >= 1) {
      return data;
    }

    const promises = posts.map((post) => DataApi.createPost(post));
    const createdPosts = await Promise.all(promises);
    return createdPosts;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export default isEmptyDate;
