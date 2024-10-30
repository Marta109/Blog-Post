function createLoginLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    UI.createElement('header', { class: 'header' }, [
      UI.createElement(
        'a',
        { class: 'btn btn-primary', href: 'src/pages/registration.html' },
        'Sign up',
      ),
      UI.createElement(
        'a',
        { class: 'btn btn-primary', href: 'src/pages/home.html' },
        'Home',
      ),
      UI.createElement(
        'button',
        { class: 'toggle-theme btn btn-dark' },
        'theme',
      ),
    ]),
    UI.createElement('div', { class: 'form-wrapper vh-100 login-container' }, [
      UI.createElement('div', { class: 'container py-5 h-100' }, [
        UI.createElement(
          'div',
          {
            class: 'row d-flex justify-content-center align-items-center h-100',
          },
          [
            UI.createElement('div', { class: 'col col-xl-10' }, [
              UI.createElement('div', { class: 'card' }, [
                UI.createElement('div', { class: 'row g-0' }, [
                  UI.createElement(
                    'div',
                    {
                      class: 'col-md-6 col-lg-5 d-none d-md-block',
                    },
                    [
                      UI.createElement('img', {
                        src: './src/assets/img/login.jpg',
                        alt: 'login form',
                        class: 'img-fluid',
                      }),
                    ],
                  ),
                  UI.createElement(
                    'div',
                    { class: 'col-md-6 col-lg-7 d-flex align-items-center' },
                    [
                      UI.createElement(
                        'div',
                        { class: 'card-body p-4 p-lg-5 text-black"' },
                        [
                          UI.createElement('form', {}, [
                            UI.createElement(
                              'div',
                              {
                                class: 'd-flex align-items-center mb-3 pb-1',
                              },
                              [
                                UI.createElement(
                                  'span',
                                  {
                                    class: 'h1 fw-bold mb-0',
                                  },
                                  'Welcome back!',
                                ),
                              ],
                            ),
                            UI.createElement(
                              'div',
                              {
                                class: 'h5 fw-normal mb-3 pb-3',
                              },
                              'Sign into your account',
                            ),
                            UI.createElement(
                              'div',
                              {
                                class: 'form-outline mb-4',
                                'data-mdb-input-init': '',
                              },
                              [
                                UI.createElement('input', {
                                  type: 'text',
                                  class: 'form-control form-control-lg',
                                  placeholder: 'username',
                                  id: 'formUserName',
                                  required: true,
                                }),
                                UI.createElement(
                                  'label',
                                  {
                                    class: 'form-label',
                                    for: 'formUserName',
                                  },
                                  'Username',
                                ),
                              ],
                            ),
                            UI.createElement(
                              'div',
                              {
                                class: 'form-outline mb-4',
                                'data-mdb-input-init': '',
                              },
                              [
                                UI.createElement('input', {
                                  type: 'password',
                                  class: 'form-control form-control-lg',
                                  placeholder: 'password',
                                  id: 'formPassword',
                                  required: true,
                                }),
                                UI.createElement(
                                  'label',
                                  {
                                    class: 'form-label',
                                    for: 'formPassword',
                                  },
                                  'Password',
                                ),
                              ],
                            ),
                            UI.createElement('div', { class: 'pt-1 mb-4' }, [
                              UI.createElement(
                                'button',
                                {
                                  'data-mdb-button-init': '',
                                  'data-mdb-ripple-init': '',
                                  class: 'btn btn-dark btn-lg btn-block',
                                  type: 'submit',
                                },
                                'Login',
                              ),
                            ]),
                            UI.createElement('p', { class: 'mb-5 pb-lg-2' }, [
                              "Don't have an account?",
                              UI.createElement(
                                'a',
                                { href: 'src/pages/registration.html' },
                                'Register here',
                              ),
                            ]),
                          ]),
                        ],
                      ),
                    ],
                  ),
                ]),
              ]),
            ]),
          ],
        ),
      ]),
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
}

function createFooter() {
  return UI.createElement(
    'footer',
    { class: 'footer', id: 'time-footer' },
    Date().toString(),
  );
}

setInterval(() => {
  const section = document.querySelector('.container-root');

  if (section) {
    section.removeChild(document.querySelector('footer'));
  }

  const footer = createFooter();

  UI.render(footer, document.querySelector('.container-root'));
}, 1000);

createLoginLayout();

const toggleBtn = document.querySelector('.toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
