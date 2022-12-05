import { dbConnect } from '../../utils/mongodb'
import ProductModel from '../../models/product'
dbConnect()
export default async function GetProduct (req, res) {
  try {
    const { id } = JSON.parse(req.body)
    const product = await ProductModel.find({ _id: id })
    res.json(product[0])
  } catch (error) {
    console.log(error)
    res.json({ message: 'apiando malito' })
  }
}
