import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => document.querySelector("#phase-8")?.scrollIntoView({ block: "center" }));
await page.waitForTimeout(2000);

const canvas = page.locator("#phase-8 canvas");
const box = await canvas.boundingBox();
if (box) {
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 200, box.y + box.height / 2, { steps: 10 });
  await page.mouse.up();
  await page.waitForTimeout(500);
}

await page.screenshot({ path: "/private/tmp/claude-501/-Users-hassantehseen-Desktop-abassociates/0a44bcad-12bc-41a5-9614-c7eeecd9a1c2/scratchpad/drag-test.png" });
console.log("Canvas found:", !!box, "Errors:", errors.length ? errors : "none");
await browser.close();
