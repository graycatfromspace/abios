require('dotenv').config()
const AbiosAPI = require('./libs/abios')

module.exports = function(options) {
  return AbiosAPI({
    clientID: process.env.ABIOS_CLIENT_ID || options.clientID,
    clientSecret: process.env.ABIOS_CLIENT_SECRET || options.clientSecret
  });

  // var methods = {}

  // methods.listGames = Promise.method(function () {
  //   return api('/games')
  // })

  // methods.getTeam = Promise.method(function (id) {
  //   // "https://api.abiosgaming.com/v2/teams/876?with[]=game&with[]=team_stats&with[]=rosters"
  //   assert(id, 'requires team id.')
  //   console.log('fetching team:', id)
  //   return api(`/teams/${id}`, [
  //     '&with[]=team_stats',
  //     '&with[]=rosters',
  //     '&with[]=schedule'
  //   ])
  // })

  // methods.getTeams = Promise.method(function (teamids) {
  //   return Promise.map(teamids, methods.getTeam, {concurrency: 2})
  // })

  // methods.getMatch = Promise.method(function (id) {
  //   assert(id, 'requires match id.')
  //   return api(`/matches/${id}`, [
  //     '&with[]=performance',
  //     '&with[]=summary'
  //   ])
  // })

  // methods.getMatches = Promise.method(function (series) {
  //   // get all the relevant match data for the series.
  //   return Promise.map(series.matches, match => {
  //     if (!match.has_pbpstats) {
  //       return match
  //     } else {
  //       console.log('fetching match:', match.id)
  //       return methods.getMatch(match.id)
  //     }
  //   }, {concurrency: 2})
  // })

  // methods.getSeries = Promise.method(function (id) {
  //   assert(id, 'requires series id.')
  //   return api(`/series/${id}`, [
  //     '&with[]=matches',
  //     '&with[]=casters'
  //   ])
  // })

  // function consumeSeriesMatches (series) {
  //   // if no matches reported yet, we just return the series.
  //   if (series.matches.length === 0) {
  //     return Promise.resolve(series)
  //   } else {
  //     return methods.getMatches(series).then(matches => {
  //       series.matches = matches
  //       return Promise.resolve(series)
  //     })
  //   }
  // }

  // methods.getSeriesWithMatches = Promise.method(function (id) {
  //   return methods.getSeries(id).then(consumeSeriesMatches)
  // })

  // methods.listSeries = Promise.method(function (page) {
  //   page = page || 1
  //   var time = moment().utc().startOf('day').subtract(12, 'hours').format()
  //   return api('/series', [
  //     `&page=${page}`,
  //     '&with[]=matches', // matches associated with the series.
  //     '&with[]=casters', // live streams for the series.
  //     '&with[]=tournament', // tournament data associated with the series.
  //     // '&with[]=comp_perf',
  //     `&starts_after=${time}`,
  //     `&order=start`
  //     // 'is_over': true,
  //   ]).then(list => {
  //     // console.log(`Found ${list.data.length} series entries!`);
  //     // console.log('fetching page:', list.current_page, 'of', list.last_page)

  //     return Promise.mapSeries(list.data, series => {
  //       // if we only have one roster listed ignore the match.
  //       if (lodash.keys(series.scores).length < 2) return
  //       // consume and fetch extra match data
  //       return consumeSeriesMatches(series)
  //     }).then(lodash.compact)
  //   })
  // })

  // return methods
}