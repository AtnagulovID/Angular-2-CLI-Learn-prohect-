import { AuthCliPage } from './app.po';

describe('auth-cli App', function() {
  let page: AuthCliPage;

  beforeEach(() => {
    page = new AuthCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
