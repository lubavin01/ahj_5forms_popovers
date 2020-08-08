const puppeteer = require('puppeteer');

jest.setTimeout(30000);
describe('screenshot popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // y
      
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
   await browser.close();
  });

  test('screenshot', async () => {
    await page.goto(baseUrl);
    
    const button1 = await page.$('.button1');
    button1.click();
    await page.screenshot({ path: 'button1.png', fullPage: true });

    const button2 = await page.$('.button2');
    await button2.click();
    await page.screenshot({ path: 'button2.png', fullPage: true });
  })
});
