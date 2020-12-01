const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')
const cors = require('cors');

const app = express()

mongoose.connect('mongodb+srv://andrey:andrey@bdmentorstalk.tztzi.mongodb.net/dbmentor?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')
    app.use(cors());
    next();
});
app.use(routes)


app.listen(process.env.PORT || 3333)