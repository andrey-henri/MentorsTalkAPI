const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')

const app = express()

mongoose.connect('mongodb+srv://nucleus:n6u7c3l9e3u7s2@cluster0.wfkfc.mongodb.net/rise?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)