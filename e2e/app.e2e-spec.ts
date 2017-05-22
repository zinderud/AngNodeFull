import { AngNodeFullPage } from './app.po';

describe('ang-node-full App', () => {
  let page: AngNodeFullPage;

  beforeEach(() => {
    page = new AngNodeFullPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
