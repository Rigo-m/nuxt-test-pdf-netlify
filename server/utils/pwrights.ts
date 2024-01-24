import * as playwright from "playwright-core";
import chromium from "@sparticuz/chromium";

export const createBrowserContext: () => Promise<playwright.BrowserContext> =
  async () => {
    const isLambdaEnv = await chromium.executablePath();

    const browser = isLambdaEnv
      ? await playwright.chromium.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: true,
      })
      : await playwright.chromium.launch();
    return await browser.newContext();
  };
