import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 1,
  reporter: 'list',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    testIdAttribute: 'data-test',
    headless: false,
  },
})
