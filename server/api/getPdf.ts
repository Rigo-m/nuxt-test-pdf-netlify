export default defineEventHandler(async () => {
  const pw = await createBrowserContext();

  const page = await pw.newPage();

  await page.goto("http://localhost:3000/");
  const pdf = await page.pdf();

  return pdf;
});
