const puppeteer = require("puppeteer");

const runJob = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(`http://localhost:3000`, {
      waitUntil: "networkidle2",
    });

    await page.pdf({
      path: `output/index.pdf`,
      format: "Letter",
      printBackground: true,
    });
  } catch {
  } finally {
    await browser.close();
  }
};

(async () => {
  await runJob();
})();
