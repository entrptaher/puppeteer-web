import puppeteer from '../lib';

(async serverAddr => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `ws://${serverAddr}`,
    ignoreHTTPSErrors: true
  });
  const pagesCount = (await browser.pages()).length;
  const browserWSEndpoint = await browser.wsEndpoint();
  console.log({ browserWSEndpoint, pagesCount });
})(`0.0.0.0:8080`);