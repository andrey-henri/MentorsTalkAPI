const Agenda = require('../models/Agenda')

module.exports = {
  async create (req, res) {
    const newAgenda = new Agenda(req.body)
    await Agenda.create(newAgenda)
    res.status(200).send()
  },
  async getAll (req, res) {
    res.status(200).json(await Agenda.find({}))
  },
  async delete (req, res) {
    try {
      await Agenda.deleteOne({ _id: req.params.id })
      res.status(200).send() 
    } catch (error) {
      res.status(400).json({ message: `Erro ao deletar a agenda: ${error.message}` })
    }
  }
}