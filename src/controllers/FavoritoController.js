const Favorito = require('../models/Favorito')

module.exports = {
  async create (req, res) {
    try {
      const favorito = new Favorito(req.body)
      await Favorito.create(favorito)
      
      return res.status(200).send()
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async getAll (req, res) {
    res.status(200).json(await Favorito.find({}))
  },

  async delete (req, res) {
    try {
      await Favorito.deleteOne({ _id: req.params.id })
      res.status(200).send() 
    } catch (error) {
      res.status(400).json({ message: `Erro ao deletar favorito: ${error.message}` })
    }
  }
}