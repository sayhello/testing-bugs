import { DmnPage } from './app.po';

describe('dmn App', function() {
  let page: DmnPage;

  beforeEach(() => {
    page = new DmnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
