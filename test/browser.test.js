import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper(['./dist/supports-date-input.iife.js'])

test('supportsDateInput returns true for Chrome', withPage, async (t, page) => {
  t.true(await page.evaluate(() => supportsDateInput()))
})
