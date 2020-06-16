const httpProxy = require("http-proxy");
const host = "0.0.0.0";
const port = 8080;

async function createServer(WSEndPoint, host, port) {
  await httpProxy
    .createServer({
      target: WSEndPoint, // where we are connecting
      ws: true,
      localAddress: host // where to bind the proxy
    })
    .listen(port); // which port the proxy should listen to
  return `ws://${host}:${port}`; // ie: ws://123.123.123.123:8080
}

const puppeteer = require("puppeteer");

puppeteer.launch().then(async browser=>{
  const pagesCount = (await browser.pages()).length; // just to make sure we have the same stuff on both place
  const browserWSEndpoint = await browser.wsEndpoint();
  const customWSEndpoint = await createServer(browserWSEndpoint, host, port); // create the server here
  console.log({ browserWSEndpoint, customWSEndpoint, pagesCount });
})