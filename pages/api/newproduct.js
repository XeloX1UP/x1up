import { dbConnect } from '../../utils/mongodb'
import ProductModel from '../../models/product'
import jwt from 'jsonwebtoken'
dbConnect()
export default async function newProduct (req, res) {
  if (!req.body.method === 'POST') {
    res.json({ succes: false, error: 'Metodo do admitido' })
  }
  const { name, description, category, price, stock, images } = JSON.parse(
    req.body
  )
  const { email } = jwt.verify(req.cookies.auth, process.env.SECRET)
  if (email) {
    const newProduct = {
      author: email,
      name,
      description,
      category,
      price,
      stock,
      images,
      status: 1
    }
    try {
      await ProductModel.create(newProduct).catch((err) => {
        console.log(err)
      })
      res.json({ succes: true })
    } catch (error) {
      res.json({ succes: false, error })
    }
  }
}
