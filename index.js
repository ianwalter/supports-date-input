import Bowser from 'bowser'

function supportsDateInput () {
  // Create an invlid date that will be used to test input[type=date] support.
  const notADateValue = 'not-a-date'

  // Create the input[type=date] element.
  const input = document.createElement('input')
  input.setAttribute('type', 'date')

  // Set the test input's value to the invalid date.
  input.setAttribute('value', notADateValue)

  // If the input didn't accept the value, we know that it is validating input,
  // and, by the same token, supports input[type=date].
  return input.value !== notADateValue
}

function uaSupportsDateInput (ua) {
  const browser = Bowser.getParser(ua)
  return !!browser.satisfies({
    firefox: '>=57',
    chrome: '>=20',
    'microsoft edge': '>=12',
    opera: '>=11',
    mobile: {
      safari: '>=5',
      'android browser': '>0'
    }
  })
}

export { supportsDateInput, uaSupportsDateInput }
