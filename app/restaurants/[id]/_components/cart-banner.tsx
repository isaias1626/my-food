"use client"

import Cart from "@/app/_components/cart";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import { CartContext } from "@/app/_context/cart";
import { formatCurrency } from "@/app/_helpers/price";
import { Restaurant } from "@prisma/client";
import { useContext } from "react";

interface CartBannerProp {
    restaurant: Pick<Restaurant, 'id'>
}

const CartBanner = ({restaurant}: CartBannerProp) => {
    const { products, totalPrice, totalQuantity } = useContext(CartContext)
    
    const restaurantHasProductOnCart = products.filter((product) => product.restaurantId === restaurant.id)

    if (!restaurantHasProductOnCart) return null

    return ( 
        <div className="fixed bottom-0 left-0 p-5 pt-3 z-50 bg-white border-t shadow-md border-solid border-muted">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-xs text-muted-foreground" >
                        Total sem entrega
                    </span>
                    <h3 className="font-semibold">{formatCurrency(totalPrice)}
                        <span className="text-xs text-muted-foreground font-normal"> /
                            {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
                        </span>
                    </h3>
                </div>

                <Sheet>
                    <SheetTrigger>
                        <Button className="font-semibold">Ver Sacola</Button>
                    </SheetTrigger>
                    <SheetContent className="w-[90vw]">
                        <SheetHeader>
                            <SheetTitle className="text-left">Sacola</SheetTitle>
                        </SheetHeader>

                        <Cart />
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default CartBanner;