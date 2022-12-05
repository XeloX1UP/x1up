import { dbConnect } from '../../utils/mongodb'
import CategoryModel from '../../models/category'
dbConnect()
export default async function CategoryList (req, res) {
  try {
    const result = await CategoryModel.find({})
    res.json(result)
  } catch (error) {
    res.json({ message: 'cago' })
  }
}
