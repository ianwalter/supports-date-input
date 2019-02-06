import test from 'ava'
// import puppeteerHelper from '@ianwalter/puppeteer-helper'
import { uaSupportsDateInput } from '.'

// const withPage = puppeteerHelper(['./dist/supports-date-input.iife.js'])

// test('supportsDateInput', t => t.pass('TODO:'))

test('uaSupportsDateInput returns true for Firefox 65', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0'
  ))
})

test('uaSupportsDateInput returns true for Chrome 72', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36'
  ))
})

test('uaSupportsDateInput returns true for Edge 14', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
  ))
})

test('uaSupportsDateInput returns true for Opera 12', t => {
  t.true(uaSupportsDateInput(
    'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18'
  ))
})

test('uaSupportsDateInput returns true for iOS Safari 11', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A356 Safari/604.1'
  ))
})

test('uaSupportsDateInput returns true for Android Browser 4', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
  ))
})

test('uaSupportsDateInput returns true for Android Chrome 63', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36'
  ))
})
