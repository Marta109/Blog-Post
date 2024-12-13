import RedirectHandler from '../scripts/redirection/redirectHandler.js';

class Storage {
  static clearUserData(itemName = 'user') {
    try {
      sessionStorage.removeItem(itemName);
      RedirectHandler.logoutHandler();
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  }

  static hasUser(itemName = 'user') {
    return !!sessionStorage.getItem(itemName);
  }

  static getUserData(itemName = 'user') {
    if (!this.hasUser(itemName)) return null;
    return JSON.parse(sessionStorage.getItem(itemName));
  }

  static setUserData(data, itemName = 'user') {
    sessionStorage.setItem(itemName, JSON.stringify(data));
  }

  static getNewPosts(itemName = 'newPost') {
    const posts = sessionStorage.getItem('newPost');
    return posts ? JSON.parse(posts) : [];
  }

  static setNewPost(newPost, itemName = 'newPost') {
    let oldPosts = sessionStorage.getItem(itemName);

    oldPosts = oldPosts ? JSON.parse(oldPosts) : [];
    oldPosts.push(newPost);
    sessionStorage.setItem(itemName, JSON.stringify(oldPosts));
  }
}

export default Storage;
