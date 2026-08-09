import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000";
const outPath = process.argv[3] || "./shot.png";
const width = parseInt(process.argv[4] || "1600", 10);
const height = parseInt(process.argv[5] || "1000", 10);
const fullPage = process.argv[6] === "full";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height } });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: outPath, fullPage });

console.log("Screenshot saved:", outPath);
console.log("Console errors:", errors.length ? errors : "none");

await browser.close();
