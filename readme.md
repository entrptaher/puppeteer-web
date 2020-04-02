puppeteer-web bundle created using browserify

# Why?
The bundlers fails to bundle puppeteer, and downloading puppeteer repo just to build puppeteer-web version seems like a hassle for quick development.

# Usage
```
yarn add puppeteer-web
```

```js
import puppeteer from 'puppeteer-web';

async function run(){

  const browser = await puppeteer.connect({
    browserWSEndpoint: `ws://0.0.0.0:8080`, // <-- connect to a server running somewhere
    ignoreHTTPSErrors: true
  });

  const pagesCount = (await browser.pages()).length;
  const browserWSEndpoint = await browser.wsEndpoint();
  console.log({ browserWSEndpoint, pagesCount });

}
```