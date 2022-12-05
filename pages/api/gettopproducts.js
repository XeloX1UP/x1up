import { dbConnect } from '../../utils/mongodb'
import ProductModel from '../../models/product'
dbConnect()
const getTopProducts = () => {
  try {
    const product = ProductModel.find({}).sort('-price').limit(5)
    return product
  } catch (error) {
    return { error }
  }
}
export default async function GetTopProducts (req, res) {
  const data = await getTopProducts()

  res.json(data)
}
