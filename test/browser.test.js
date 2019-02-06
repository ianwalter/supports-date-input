import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper(['./dist/supports-date-input.iife.js'])

test(`returns true for Puppeteer's Chrome`, withPage, async (t, page) => {
  t.true(await page.evaluate(() => supportsDateInput()))
})
