puppeteer-web bundle created using browserify

## Why?

- The bundlers fails to bundle puppeteer, and downloading puppeteer repo just to build puppeteer-web version seems like a hassle for quick development.
- Puppeteer team removed puppeteer-web from their repo in [this PR](https://github.com/puppeteer/puppeteer/pull/5750)
- The previous puppeteer could be found here on [this commit](https://github.com/puppeteer/puppeteer/tree/6522e4f524bdbc1f1b9d040772acf862517ed507/utils/browser), but it's a pain to build that as well.
- Lots of questions in stackoverflow [like this](https://stackoverflow.com/a/54654516/6161265) shows the demand of such library.

## Usage
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

## Roadmap

- [ ] Auto build new minorversion on new puppeteer-core release
- [ ] Update document about pitfall
- [ ] Add server and client example along with a explanation post
