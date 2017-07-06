import { EcoManagementPage } from './app.po';

describe('eco-management App', () => {
  let page: EcoManagementPage;

  beforeEach(() => {
    page = new EcoManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
