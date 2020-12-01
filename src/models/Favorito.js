const mongoose = require('mongoose')

const FavoritoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fantasy: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  birdLicenses: [
    { 
      key: 
        { 
          type: String, 
          unique: true,
          required: true
        }, 
      expiration: Date 
    }
  ]
})

module.exports = mongoose.model('Favorito', FavoritoSchema)