import { dbConnect } from '../../utils/mongodb'
import UserModel from '../../models/user'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
dbConnect()
const daysToExpire = (cant) => {
  return Math.floor(Date.now() / 1000) + 60 * 60 * 24 * cant
}
const login = async (body, res) => {
  const errors = []
  const result = await UserModel.find(body, 'username email role')
  if (result.length > 0) {
    const token = jwt.sign(
      {
        exp: daysToExpire(10),
        email: result[0].email,
        name: result[0].username,
        role: result[0].role,
        logged: true
      },
      process.env.SECRET || 'secret'
    )
    const serialized = serialize('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: daysToExpire(10),
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)

    return {
      login: true,
      user: result
    }
  } else {
    errors.push({ message: 'Usuario no registrado' })
    return {
      login: false,
      errors
    }
  }
}

export default async function handler (req, res) {
  const { method, body } = req
  switch (method) {
    case 'POST': {
      const response = await login(JSON.parse(body), res)

      return res.status(200).json(response)
    }
    case 'GET':
      return res.status(200).send('Usando GET')
    default:
      return res.status(502).send('Acceso denegado')
  }
}
