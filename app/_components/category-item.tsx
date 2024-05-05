import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({
  category,
}: CategoryItemProps) => {
  return (
    <Link href={`/categories/${category.id}/products`}
    className="flex items-center gap-3 py-2 px-4 bg-white border-primary border-2 rounded-full w-full min-w-fit">
      <div className="flex items-center gap-1">
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
    </Link>
  )
}

export default CategoryItem
