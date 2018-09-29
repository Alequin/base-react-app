const flow = require('lodash/flow')

function transparentHexColour (colour, transparencyPercentage) {
  const transparentHexValue = flow(
    validatePercentage,
    invertPercentage,
    convertToHex,
    validateHexValue
  )(transparencyPercentage)

  return `${colour}${transparentHexValue}`.toUpperCase()
}

function validatePercentage (percentage) {
  if (percentage < 0) return 0
  if (percentage > 100) return 100
  return percentage
}

function invertPercentage (percentage) {
  return 100 - percentage
}

function convertToHex (percentage) {
  return Math.round(percentage / 100 * 255).toString(16)
}

function validateHexValue (hexNumber) {
  const hex = hexNumber.length === 1 ? `0${hexNumber}` : hexNumber
  return hex !== 'ff' ? hex : ''
}

module.exports = transparentHexColour
