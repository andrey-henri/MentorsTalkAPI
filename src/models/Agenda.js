const mongoose = require('mongoose')

const AgendaSchema = new mongoose.Schema({
  nameMonitor: String,
  title: String,
  date: String
})

module.exports = mongoose.model('Agenda', AgendaSchema, 'agenda')