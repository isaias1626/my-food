import { Category } from '@prisma/client'
import Image from 'next/image'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({
  category,
}: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 py-2 px-4 bg-white border-primary border-2 rounded-full w-[100%] min-w-fit">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
      <span className="font-semibold text-sm">
        {category.name}
      </span>
    </div>
  )
}

export default CategoryItem
