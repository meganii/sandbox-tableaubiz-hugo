import puppeteer from 'puppeteer';

const project = "tableau/villagepump-dashboard";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({width: 1366, height: 768});

  console.log("start")
  await page.goto(`http://localhost:1313/${project}/`, {waitUntil: 'load'});

  await page.waitForNetworkIdle({idleTime: 5000});

  console.log("capture")
  await page.screenshot({path: `content/${project}/thumb.png`});

  // Type into search box
  // await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  // const searchResultSelector = '.search-box__link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // let fullTitle = '';
  // if (textSelector) {
  //   fullTitle = await textSelector.evaluate(el => el.textContent) || '';
  // }

  // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();