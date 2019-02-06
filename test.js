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

test('uaSupportsDateInput returns false for Firefox 54', t => {
  t.false(uaSupportsDateInput(
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0'
  ))
})

test('uaSupportsDateInput returns true for Chrome 72', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36'
  ))
})

test('uaSupportsDateInput returns false for Chrome 9', t => {
  t.false(uaSupportsDateInput(
    'Mozilla/5.0 (en-us) AppleWebKit/534.14 (KHTML, like Gecko; Google Wireless Transcoder) Chrome/9.0.597 Safari/534.14'
  ))
})

test('uaSupportsDateInput returns true for Edge 14', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
  ))
})

test('uaSupportsDateInput returns false for Edge 11', t => {
  t.false(uaSupportsDateInput(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/11.10240'
  ))
})

test('uaSupportsDateInput returns true for Opera 12', t => {
  t.true(uaSupportsDateInput(
    'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18'
  ))
})

test('uaSupportsDateInput returns false for Opera 8', t => {
  t.false(uaSupportsDateInput(
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 8.02'
  ))
})

test('uaSupportsDateInput returns true for iOS Safari 11', t => {
  t.true(uaSupportsDateInput(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A356 Safari/604.1'
  ))
})

test('uaSupportsDateInput returns false for iOS Safari 4', t => {
  t.false(uaSupportsDateInput(
    'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7'
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
