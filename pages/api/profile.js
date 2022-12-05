import { verify } from 'jsonwebtoken'
export default async function profile (req, res) {
  const token = req.cookies
  if (token.auth) {
    const { auth } = token
    if (auth !== 'null') {
      const user = verify(auth, process.env.SECRET || 'secret')
      if (user.logged) {
        return res.json({ logged: user.logged, role: user.role })
      }
    }
  }

  return res.json({ logged: false })
}
