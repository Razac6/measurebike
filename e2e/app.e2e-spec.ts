import { BikePage } from './app.po';

describe('bike App', () => {
  let page: BikePage;

  beforeEach(() => {
    page = new BikePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
