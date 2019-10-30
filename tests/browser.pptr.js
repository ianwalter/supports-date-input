import { test } from '@ianwalter/bff-puppeteer'
import supportsDateInput from '..'

test('Chrome supports date input', ({ expect }) => {
  expect(supportsDateInput()).toBe(true)
})
