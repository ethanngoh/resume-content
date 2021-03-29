const puppeteer = require("puppeteer");

const runJob = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    console.log("waiting for page to load");
    await page.goto(`http://localhost:3000`, {
      waitUntil: "networkidle2",
    });
    console.log("printing");
    await page.pdf({
      path: `output/chris-bentivenga-resume.pdf`,
      format: "Letter",
      printBackground: true,
    });
    console.log("printed");
  } catch (e) {
    console.error("Exception thrown", e.stack);
  } finally {
    console.log("closing");
    await browser.close();
    console.log("done");
  }
};

(async () => {
  await runJob();
})();
