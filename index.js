const puppeteer = require('puppeteer');

const url= 'https://geoportal.siata.gov.co/geoportal/';

(async () => {
    const browser = await puppeteer.launch({
        headless: false // Esto hace que el navegador sea headful
    });
    const page = await browser.newPage();
    await page.goto(url);

    //set viewport full screen for better view
    // await page.setViewport({ width: 1920, height: 1080 });

    // await toggle forecast selector
    await page.waitForSelector('._toggle__forecast_desktop_10e61_13._container__open_10e61_37');

    //click on toggle forecast selector
    await page.click('._toggle__forecast_desktop_10e61_13._container__open_10e61_37');
    

    // Espera 5 segundos antes de cerrar el navegador
    setTimeout(async () => {
        await browser.close();
    }, 5000);
})();

