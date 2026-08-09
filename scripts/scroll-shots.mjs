import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000";
const outDir = process.argv[3] || ".";
const width = parseInt(process.argv[4] || "1600", 10);
const height = parseInt(process.argv[5] || "1000", 10);
const prefix = process.argv[6] || "shot";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height } });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1500);

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const steps = Math.ceil(totalHeight / height);

for (let i = 0; i < steps; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * height);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${outDir}/${prefix}_${String(i).padStart(2, "0")}.png` });
}

console.log("Total height:", totalHeight, "Steps:", steps);
console.log("Console errors:", errors.length ? errors : "none");

await browser.close();
