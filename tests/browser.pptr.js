import { test } from '@ianwalter/bff'

test('Chrome supports date input', ({ expect }) => {
  expect(supportsDateInput()).toBe(true)
})
