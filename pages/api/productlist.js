import { dbConnect } from '../../utils/mongodb'
import ProductModel from '../../models/product'

dbConnect()
export default async function ProductList (req, res) {
  try {
    const result = await ProductModel.find({})
    res.json(result)
  } catch (error) {
    res.json({ message: 'Error inesperado' })
  }
}
