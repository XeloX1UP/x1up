import { dbConnect } from '../../../utils/mongodb'
import CategoryModel from '../../../models/category'
dbConnect()
export default async function GetSpecificCategory (req, res) {
  const { categoryId } = req.query
  const categoryName = await CategoryModel.findById(categoryId)
  res.json({ name: categoryName.name })
}
