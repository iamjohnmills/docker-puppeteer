const puppeteer = require("puppeteer");

(async () => {
  console.log('Initializing puppeteer...');
  const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/google-chrome',
      args: [
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-setuid-sandbox",
          "--no-sandbox",
      ]
  });
  console.log('Loading URL...');
  const page = await browser.newPage();
  await page.goto('https://github.com/iamjohnmills', { waitUntil: 'load', timeout: 0 });
  console.log('Parsing content...');
  const content = await page.content();
  console.log(content);
  await page.close();
  await browser.close();
})();
