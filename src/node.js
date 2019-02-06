import Bowser from 'bowser'

export default function supportsDateInput (ua) {
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
