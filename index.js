//This file will make the test in desktop view
const puppeteer = require("puppeteer");

const url = "https://geoportal.siata.gov.co/geoportal/";

async function testGeoportal() {
  const browser = await puppeteer.launch({
    headless: true, // Esto hace que el navegador sea headless
    // devtools: false, //Esto abre las herramientas de desarrollador
  });
  const page = await browser.newPage();

  const mobileView = false;

  mobileView
    ? await page.setViewport({ width: 375, height: 667 }) // Set the viewport to iPhone X
    : await page.setViewport({ width: 1920, height: 1080 }); // Set the viewport to Desktop

  //Ir a la página
  await page.goto(url, { waitUntil: "networkidle2", timeout: 900000 });

  //Selector for the min temperature forecast
  const minTemperatureForecast =
    "#root > div > div:nth-child(1) > div > div.header-app > div._forecastContainer_7wr00_2 > div._forecast__desktop_7wr00_27._container__open_7wr00_37 > div.forecastWidget__report-wrapper.MuiBox-root.css-0 > div.forecastWidget__temperature-wrapper > div > section:nth-child(1) > div > div";

  // await page.waitForSelector(minTemperatureForecast, {
  //   visible: true,
  //   timeout: 90000,
  // });

  // Measure the page load time
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  const loadTime =
    performanceTiming.loadEventEnd - performanceTiming.navigationStart;
  console.log(`Page load time: ${loadTime} ms`);

  // Espera 10 segundos antes de cerrar el navegador
  setTimeout(async () => {
    await browser.close();
  }, 10000);
}

async function main() {
  try {
    const totalInstances = 1000;
    const batchSize = 25; // Number of instances to run at a time

    for (let i = 0; i < totalInstances; i += batchSize) {
      const promises = Array.from({ length: batchSize }, () => testGeoportal());
      await Promise.all(promises);
      console.log(`Batch ${i / batchSize + 1} completed`);
    }

    console.log("All batches completed");
  } catch (error) {
    console.error("Error:", error);
  }
}
main();
