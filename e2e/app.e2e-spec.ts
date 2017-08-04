import { CoursesPage } from './app.po';

describe('courses App', () => {
  let page: CoursesPage;

  beforeEach(() => {
    page = new CoursesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
