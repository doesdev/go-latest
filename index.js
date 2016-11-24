'use strict'

// Setup
const goVersions = require('go-versions')

// Exports
module.exports = goLatest

// Main
function goLatest () {
  return new Promise((resolve, reject) => {
    goVersions().then((vl) => resolve(vl[0])).catch(reject)
  })
}
