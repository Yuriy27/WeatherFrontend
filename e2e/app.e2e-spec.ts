import { WeatherFrontendPage } from './app.po';

describe('weather-frontend App', () => {
  let page: WeatherFrontendPage;

  beforeEach(() => {
    page = new WeatherFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
