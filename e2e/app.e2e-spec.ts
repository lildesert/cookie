import { CookiePage } from './app.po';

describe('cookie App', function() {
  let page: CookiePage;

  beforeEach(() => {
    page = new CookiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
