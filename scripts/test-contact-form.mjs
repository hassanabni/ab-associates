import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView({ block: "center" }));
await page.waitForTimeout(1000);

await page.fill("#name", "Test User");
await page.fill("#email", "test@example.com");
await page.fill("#message", "I'm interested in a waterfront property.");
await page.click('button[type="submit"]');

await page.waitForTimeout(2000);
await page.screenshot({ path: "/private/tmp/claude-501/-Users-hassantehseen-Desktop-abassociates/0a44bcad-12bc-41a5-9614-c7eeecd9a1c2/scratchpad/contact-form-state.png" });

console.log("Errors:", errors.length ? errors : "none");
await browser.close();
