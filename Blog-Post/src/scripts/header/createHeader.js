function createHeader(links) {
  return UI.createElement('header', { class: 'header' }, [
    ...links.map((el) => {
      return UI.createElement(
        'a',
        { class: 'btn btn-dark', href: el.href },
        el.name,
      );
    }),
    UI.createElement('button', { class: 'toggle-theme btn btn-dark' }, [
      UI.createElement('i', { class: 'fas fa-moon' }),
    ]),
  ]);
}

export default createHeader;
