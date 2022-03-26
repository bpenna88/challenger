const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.warn('Started Server.')
})

mongoose
  .connect('mongodb://localhost:27017/oliveiratrade', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

