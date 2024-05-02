"use client";

import DiscountBadge from "@/app/_components/discount-badge";
import { Button } from "@/app/_components/ui/button";
import { calculateProductTotalPrice, formatCurrency } from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: true,
        }
    }>
}

const ProductDetails = ({product}: ProductDetailsProps) => {
    return ( 
        <div className="p-5">
                {/* RESTAURANTE */}
                <div className="flex items-center gap-[0.375rem]">
                    <div className="relative h-6 w-6">
                    <Image
                        src={product.restaurant.imageUrl}
                        alt={product.restaurant.name}
                        fill
                        className="rounded-full object-cover"
                    />
                    </div>
                    <span className="text-xs text-muted-foreground">{product.restaurant.name}</span>
                </div>

                {/*Nome do Produto*/}
                <h1 className="font-semibold text-xl mb-3 mt-1" >{product.name}</h1>

                {/*Preço do Produto e quantidade*/}
                <div className="flex justify-between">

                    {/*Preço com desconto*/}
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-semibold text-xl">
                                {formatCurrency(calculateProductTotalPrice(product))}
                            </h2>
                            {product.discountPercentage > 0 && (
                                <DiscountBadge product={product} />
                            )}
                        </div>

                        {/*Preço original*/}
                        {product.discountPercentage > 0 && (
                            <p className="text-muted-foreground text-sm line-through" >
                                De: {formatCurrency(Number(product.price))}
                            </p>
                        )}
                </div>
                
                {/*Quantidade*/}
                <div className="flex gap-2 items-center">
                    <Button size="icon" variant="ghost" >
                        <ChevronLeftIcon />
                    </Button>
                </div>
                </div>
            </div>
    );
}

export default ProductDetails;