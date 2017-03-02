import { NbaDtfPage } from './app.po';

describe('nba-dtf App', () => {
  let page: NbaDtfPage;

  beforeEach(() => {
    page = new NbaDtfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
