"use client";

import DeliveryInfo from "@/app/_components/delivery-info";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { calculateProductTotalPrice, formatCurrency } from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: true,
        }
    }>;
    complementaryProducts: Prisma.ProductGetPayload<{
        include: {
            restaurant: true,
        }
    }>[]
}

const ProductDetails = ({ product, complementaryProducts }: ProductDetailsProps) => {
    const [quantity, setQuantity] = useState(1)

    const handleIncreaseQuantity = () => setQuantity(currentState => currentState + 1);
    const handleDecreaseQuantity = () => setQuantity(currentState => {
        if (currentState === 1) return 1;

        return currentState - 1;
    });

    return ( 
        <div className="py-5 rounded-t-3xl mt-[-1.5rem] z-50 bg-white relative">
                {/* RESTAURANTE */}
                <div className="flex items-center gap-[0.375rem] px-5">
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
                <h1 className="font-semibold text-xl mb-3 mt-1 px-5" >{product.name}</h1>

                {/*Preço do Produto e quantidade*/}
                <div className="flex justify-between px-5">

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
                <div className="flex gap-3 items-center text-center px-5">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="border border-solid border-muted-foreground"
                        onClick={handleDecreaseQuantity}
                    >
                        <ChevronLeftIcon />
                    </Button>
                    <span className="w-4">{quantity}</span>
                    <Button
                        size="icon"
                        onClick={handleIncreaseQuantity}
                    >
                        <ChevronRightIcon />
                    </Button>
                </div>
            </div>
            
            {/*Dados da entrega */}
            <div className="px-5">
                <DeliveryInfo restaurant={product.restaurant} />
            </div>
            
            <div className="mt-6 space-y-3 px-5">
                <h3 className="font-semibold">Sobre</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
            </div>

            <div className="mt-6 space-y-3">
                <h3 className="font-semibold px-5">Sucos</h3>
                <ProductList products={complementaryProducts} />
            </div>
            <div className="px-5 mt-6">
                <Button className="w-full font-semibold">Adicionar á sacola</Button>
            </div>
            </div>
    );
}

export default ProductDetails;