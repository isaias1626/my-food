import { Product } from '@prisma/client'
import Image from 'next/image'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({
  product,
}: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      {/* IMAGEM */}
      <div className="h-[150px] w-full relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>
      {/* TITULO,PREÇO E RESTAURANTE */}
      <div>
        <h2>{product.name}</h2>
        <div className="flex gap-4">
          <h3>
            R$:
            {Intl.NumberFormat(
              'pt-BR',
              {
                currency: 'BRL',
                minimumFractionDigits: 2,
              },
            ).format(
              Number(product.price),
            )}
          </h3>
          {product.discountPercentage >
            0 && (
            <span className="line-through text-muted-foreground">
              {Number(product.price)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
