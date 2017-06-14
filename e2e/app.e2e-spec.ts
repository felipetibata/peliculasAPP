import { PeliculasAppPage } from './app.po';

describe('peliculas-app App', () => {
  let page: PeliculasAppPage;

  beforeEach(() => {
    page = new PeliculasAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
