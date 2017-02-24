import { AuthOprosPage } from './app.po';

describe('auth-opros App', () => {
  let page: AuthOprosPage;

  beforeEach(() => {
    page = new AuthOprosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
