import { Redux1Page } from './app.po';

describe('redux1 App', () => {
  let page: Redux1Page;

  beforeEach(() => {
    page = new Redux1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
