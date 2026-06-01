import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1280, height: 800 })

const routes = [
  { url: 'http://localhost:5173/admin/patients', file: 'screenshots/patients.png' },
  { url: 'http://localhost:5173/admin/clinical', file: 'screenshots/clinical.png' },
  { url: 'http://localhost:5173/admin/financials', file: 'screenshots/financials.png' },
  { url: 'http://localhost:5173/admin/support', file: 'screenshots/support.png' },
]

for (const { url, file } of routes) {
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  await page.screenshot({ path: file })
  console.log('✓', file)
}

await browser.close()
