import { Product } from '@prisma/client'

export const calculateProductTotalPrice =
  (product: Product): number => {
    if (
      product.discountPercentage === 0
    ) {
      return Number(product.price)
    }

    const discount =
      Number(product.price) *
      (product.discountPercentage / 100)

    return (
      Number(product.price) - discount
    )
  }