import { createNotification } from '../notification/createNotification.js';

class RedirectHandler {
  static time = 2000;
  static mainPath = '/Blog-Post/src/pages';

  static redirectToCretePost() {
    window.location.href = './createPost.html';
  }

  static redirectToHome() {
    window.location.href = `${this.mainPath}/home.html`;
  }

  static logoutHandler() {
    if (window.location.href.includes('createPost')) {
      createNotification(
        'info',
        'You have successfully logged out and will be redirected to the login page.',
      );
      setTimeout(() => {
        window.location.replace('../../index.html');
      }, this.time);
    } else {
      location.reload();
    }
  }
  static signInHandler() {
    createNotification('success', 'Sing Up successful! Welcome Back!.');
    setTimeout(() => {
      this.redirectToHome();
    }, this.time);
  }

  static signUpHandler() {
    createNotification('success', 'Registration successful! Welcome!!!.');
    setTimeout(() => {
      this.redirectToHome();
    }, this.time);
  }

  static redirectAfterPostCreation() {
    createNotification('success', 'You have successfully created a post.');
    setTimeout(() => {
      this.redirectToHome();
    }, this.time);
  }
}

export default RedirectHandler;
