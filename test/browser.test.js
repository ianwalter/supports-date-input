import test from 'ava'
import puppeteerHelper from '@ianwalter/puppeteer-helper'

const withPage = puppeteerHelper()

test(`returns true for Puppeteer's Chrome`, withPage, async t => {
  t.true(await t.evaluate('./test/helpers/eval.js'))
})
