import { KomboozechaPage } from './app.po';

describe('komboozecha App', function() {
  let page: KomboozechaPage;

  beforeEach(() => {
    page = new KomboozechaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
