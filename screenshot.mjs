import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('./screenshots', { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1280, height: 800 })

const routes = [
  { url: 'http://localhost:5173/login', file: 'screenshots/login.png' },
  { url: 'http://localhost:5173/admin/dashboard', file: 'screenshots/admin-dashboard.png' },
  { url: 'http://localhost:5173/admin/system', file: 'screenshots/system-admin.png' },
  { url: 'http://localhost:5173/patient/dashboard', file: 'screenshots/patient-dashboard.png' },
  { url: 'http://localhost:5173/patient/analysis', file: 'screenshots/ai-analysis.png' },
  { url: 'http://localhost:5173/patient/premium', file: 'screenshots/premium.png' },
]

for (const { url, file } of routes) {
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  await page.screenshot({ path: file, fullPage: false })
  console.log('✓', file)
}

await browser.close()
console.log('Done!')
