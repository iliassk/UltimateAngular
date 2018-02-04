import { BasicsPage } from './app.po';

describe('basics App', () => {
  let page: BasicsPage;

  beforeEach(() => {
    page = new BasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
