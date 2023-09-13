const puppeteer = require("puppeteer");

const waitForDOMStable = (page, options = { timeout: 30000, idleTime: 500 }) =>
    page.evaluate(
        ({ timeout, idleTime }) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    observer.disconnect();
                    const msg =
                        `timeout of ${timeout} ms ` +
                        "exceeded waiting for DOM to stabilize";
                    reject(Error(msg));
                }, timeout);
                const observer = new MutationObserver(() => {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(finish, idleTime);
                });
                const config = {
                    attributes: true,
                    childList: true,
                    subtree: true
                };
                observer.observe(document.body, config);
                const finish = () => {
                    observer.disconnect();
                    resolve();
                };
                let timeoutId = setTimeout(finish, idleTime);
            }),
        options
    );
const runJob = async () => {
    const browser = await puppeteer.launch({ product: "firefox" });
    const page = await browser.newPage();
    try {
        console.log("waiting for page to load");
        await page.goto(`http://localhost:3000`, {
            waitUntil: "domcontentloaded"
        });
        await waitForDOMStable(page);

        console.log("printing");

        await page.pdf({
            path: `output/ethan-egoh-resume.pdf`,
            format: "Letter",
            pageRanges: "1"
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