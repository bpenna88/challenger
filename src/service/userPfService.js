const UserPf = require('../models/UserPf')

const signUp = async (request, response) => {
  try {
    const { username, cpf, password } = request.body

    const userPf = await new UserPf({
      username,
      cpf,
      password
    }).save()

    return response.status(201).json({
      mensagem: 'Created.',
      userPf: {
        _id: userPf._id,
        username: userPf.username
      }
    })
  } catch (e) {
    console.error('Error ' + e)
  }
}

const signIn = async (request, response) => {
  try {
    const { cpf, password } = request.body

    const userPf = await UserPf.findOne().where({ cpf, password })
    console.log(userPf)
    if (!userPf) {
      return response.status(401).json({ mensagem: 'Not find.' })
    }
    return response.status(200).json({
      mensagem: 'Logged.',
      userPf: {
        _id: userPf._id,
        username: userPf.username
      }
    })
  } catch (e) {
    console.error('Error: ' + e)
  }
}

exports.signUp = signUp
exports.signIn = signIn
