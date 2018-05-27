var requestP = require('request-promise')
var Promise = require('bluebird')
var assert = require('assert')
var joinurl = require('url-join')

const BASE_URL = process.env.ABIOS_BASE_URL || 'https://api.abiosgaming.com/v2'

module.exports = function (options) {
  var {clientID, clientSecret} = options

  assert(clientID, 'Requires abios client id')
  assert(clientSecret, 'Requires abios client secret')

  var tokenExpires = null
  var token = null

  function generateToken () {
    if (tokenExpires > Date.now() && token) return Promise.resolve(token)
    return requestP({
      uri: BASE_URL + '/oauth/access_token',
      method: 'POST',
      json: true,
      form: {
        'grant_type': 'client_credentials',
        'client_id': clientID,
        'client_secret': clientSecret
      }
    }).then(resp => {
      // set the token exp date
      tokenExpires = (resp.expires_in * 1000) + Date.now()
      token = resp.access_token
      return token
    })
  }

  function call (endpoint, options) {
    options = options || []
    return generateToken().then(token => {
      endpoint = joinurl(BASE_URL, endpoint, `?access_token=${token}`, ...options)
      return requestP({
        uri: endpoint,
        // uri: BASE_URL + endpoint,
        method: 'GET',
        json: true
      })
    })
  }

  return call
}
