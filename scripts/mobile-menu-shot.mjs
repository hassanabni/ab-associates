import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000";
const outPath = process.argv[3] || "./mobile-menu.png";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1000);
await page.click('button[aria-label="Open menu"]');
await page.waitForTimeout(900);
await page.screenshot({ path: outPath });

console.log("Saved:", outPath, "Errors:", errors.length ? errors : "none");
await browser.close();
