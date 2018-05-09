import { MarketingEmailPage } from './app.po';

describe('marketing-email App', function() {
  let page: MarketingEmailPage;

  beforeEach(() => {
    page = new MarketingEmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
