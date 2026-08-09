import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000";
const selector = process.argv[3] || "#where-we-work";
const outPath = process.argv[4] || "./section.png";
const width = parseInt(process.argv[5] || "1600", 10);
const height = parseInt(process.argv[6] || "1000", 10);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1000);
await page.locator(selector).scrollIntoViewIfNeeded();
await page.waitForTimeout(1200);
await page.locator(selector).screenshot({ path: outPath });

console.log("Saved:", outPath, "Errors:", errors.length ? errors : "none");
await browser.close();
