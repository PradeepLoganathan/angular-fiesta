import { AndyleePage } from './app.po';

describe('andylee App', () => {
  let page: AndyleePage;

  beforeEach(() => {
    page = new AndyleePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
