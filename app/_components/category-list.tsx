import { db } from '../_lib/prisma'
import CategoryItem from './category-item'

const CategoryList = async () => {
  const categories =
    await db.category.findMany({})
  //pegar as caterorias do banco de dados
  //Rederizar um item para cada categoria
  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}

export default CategoryList