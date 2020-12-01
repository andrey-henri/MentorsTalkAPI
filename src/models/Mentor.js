const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  IdadeUf: String,
  Imagem: String,
  Desc: String,
  Linguagem: String,
  liked: Boolean,
  sobre: String,
  imgsobre: String,
  UltimaExp: String,
  Cargo: String,
  Empresa: String,
  novo: Boolean,
  Likes: Number,
  Likado: Boolean
})

module.exports = mongoose.model('Mentor', MentorSchema)