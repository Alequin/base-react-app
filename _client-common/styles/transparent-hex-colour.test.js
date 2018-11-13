const tranparentHexColour = require('./transparent-hex-colour')

it("Should return 'E6' when given 10 percent", () => {
  const expected = 'E6'
  const actual = tranparentHexColour('', 10)
  expect(actual).toBe(expected)
})

it("Should return '1A' when given 90 percent", () => {
  const expected = '1A'
  const actual = tranparentHexColour('', 90)
  expect(actual).toBe(expected)
})

it("Should return '00' when given 100 percent", () => {
  const expected = '00'
  const actual = tranparentHexColour('', 100)
  expect(actual).toBe(expected)
})

it('Should return an empty string when given 0 percent', () => {
  const expected = ''
  const actual = tranparentHexColour('', 0)
  expect(actual).toBe(expected)
})
