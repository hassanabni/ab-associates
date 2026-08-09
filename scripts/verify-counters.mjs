import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

await page.evaluate(() => {
  document.querySelector("#legacy")?.scrollIntoView({ block: "end" });
});
await page.waitForTimeout(2800);

await page.screenshot({ path: "/private/tmp/claude-501/-Users-hassantehseen-Desktop-abassociates/0a44bcad-12bc-41a5-9614-c7eeecd9a1c2/scratchpad/counters-check.png" });
console.log("done");
await browser.close();
