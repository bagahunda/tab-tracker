const {Song} = require('../models')

module.exports = {

  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (err) {
      req.status(500).send({
        error: 'An error has occured trying to fetch all songs'
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      req.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  }
}
