import PostApi from "../postApi.js";
import { posts } from "./startData.js";

const isEmptyDate = async function () {
  try {
    const data = await PostApi.getAllPosts();

    if (data && data.length >= 1) {
      return data;
    }

    const promises = posts.map((post) => PostApi.createPost(post));
    const createdPosts = await Promise.all(promises);

    if (!createdPosts || createdPosts.every((post) => !post)) {
      throw new Error(
        "No posts were created. Please check the post data or server connection."
      );
    }
    return createdPosts;
  } catch (error) {
    console.error("Error:", error.message);
    return posts;
  }
};

export default isEmptyDate;
