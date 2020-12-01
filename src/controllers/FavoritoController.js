const Client = require('../models/Client')

module.exports = {
  async create (req, res) {
    try {
      const client = new Client(req.body)

      if(!client.name) throw new Error('Nome não informado')
      if(!client.fantasy) throw new Error('Nome Fantasia não informado')
      if(!client.cnpj) throw new Error('CNPJ não informado')
      
      await Client.create(client)
      
      return res.status(200).send()
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  },

  async getAll (req, res) {
    res.status(200).json(await Client.find({}))
  },
}