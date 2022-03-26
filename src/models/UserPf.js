const mongoose = require('mongoose')

const UserPf = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  cpf: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('UserPf', UserPf)
