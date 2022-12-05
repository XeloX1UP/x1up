import { dbConnect } from '../../utils/mongodb'
import CatgoryModel from '../../models/category'
dbConnect()
export default async function newCategory (req, res) {
  const newCategory = JSON.parse(req.body)
  try {
    await CatgoryModel.create(newCategory)
    res.json({ message: 'Guardado con éxito', isValid: true })
  } catch (error) {
    res.json({ message: 'Error guardando la categoría', isValid: false })
  }
}
