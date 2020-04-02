const fs = require("fs");
const browserify = require("browserify");

browserify({
  entries: require.resolve("puppeteer-core"),
  standalone: "puppeteer"
})
  .transform("aliasify", {
    aliases: {
      ws: __dirname + "/ws.js"
    }
  })
  .bundle()
  .pipe(fs.createWriteStream("lib/index.js"));
