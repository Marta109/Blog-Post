class DataApi {
  static baseUrl = 'https://simple-blog-api-red.vercel.app';
  static basePath = 'api';
  static postPath = 'posts';

  static async getAllPosts() {
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.basePath}/${this.postPath}`,
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  static async getPostById(id) {
    if (!id) return;
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.basePath}/${this.postPath}/${id}`,
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }

  static async createPost(postData) {
    if (!postData) return;
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.basePath}/${this.postPath}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error new  post:', error);
    }
  }

  static async updatePost(id, postData) {
    if (!id || !postData) return;
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.basePath}/${this.postPath}/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      if (!response.ok) {
        throw new Error(`Error! updatePost: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error update  post:', error);
    }
  }

  static async deletePost(id) {
    if (!id) return;
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.basePath}/${this.postPath}/${id}`,
        {
          method: 'DELETE',
        },
      );
      if (!response.ok) {
        throw new Error(`Error! delete: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error update  delete:', error);
    }
  }
}

export default DataApi;
