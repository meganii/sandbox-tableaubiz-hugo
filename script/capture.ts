import puppeteer from 'puppeteer';

const projects = [
  "tableau/blog-mentoring",
  "tableau/japanese-font",
  "tableau/villagepump-dashboard"
];

const baseurl = 'https://viz.meganii.com';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  let promiseList = [];

  try {
    projects.forEach(project => {
      promiseList.push((async () => {
        const page = await browser.newPage();
        // Set screen size
        await page.setViewport({ width: 1366, height: 768 });
        await page.setDefaultNavigationTimeout(0);

        const url = `${baseurl}/${project}/`;
        console.log(`Start ${url}`);
        await page.goto(url);

        console.log(`Wait for event ${url}`);
        await Promise.race([
          page.evaluate(() => {
            return new Promise((resolve) => {
              let viz = document.getElementById("tableauViz");
              viz.addEventListener('firstinteractive', resolve, { once: true })
            })
          }),
          new Promise(r => setTimeout(r, 100000))
        ]);

        await new Promise(r => setTimeout(r, 2000));
        console.log(`Complete ${url}`);

        console.log(`Screenshot ${url}`);
        await page.screenshot({ path: `content/${project}/thumb.png` });
      })().catch(e => console.error(e)))
    });

    await Promise.all(promiseList);
    await browser.close();
    console.log("Close browser");
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
})();