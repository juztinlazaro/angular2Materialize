import { MumstestappPage } from './app.po';

describe('mumstestapp App', () => {
  let page: MumstestappPage;

  beforeEach(() => {
    page = new MumstestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
