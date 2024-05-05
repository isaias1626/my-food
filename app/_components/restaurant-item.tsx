import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import Link from "next/link";

interface RestaurantItemProps {
    restaurant: Restaurant
}

const RestaurantItem = ({restaurant} :RestaurantItemProps) => {
    return ( 
        <Link className="min-w-[266px] max-w-[266px] " href={`/restaurants/${restaurant.id}`}>
            <div className="w-full space-y-3">
                {/*Imagem*/}
                <div className="w-full h-[136px] relative">
                    <Image src={restaurant.imageUrl} fill className="object-cover rounded-lg" alt={restaurant.name} />
                    
                    <div className="gap-[2px] flex items-center absolute top-2 left-2 bg-white rounded-full py-[2px] px-2">
                        <StarIcon size={12} className="fill-yellow-500 text-yellow-400"/>
                        <span className='font-semibold text-xs'>5.0</span>
                    </div>

                    <Button className="absolute top-2 right-2 bg-gray-700 rounded-full w-7 h-7"
                    size="icon" >
                        <HeartIcon className=" fill-white" size={16} />
                    </Button>
                </div>
                {/*Texto*/}
                <div>
                    <h3 className="font-semibold text-sm">{restaurant.name}</h3>
                    <div className="flex gap-3">
                        {/*Custo de Entrega*/}
                        <div className="flex gap-1 items-center">
                            <BikeIcon className="text-primary" size={14} />
                            <span className="text-xs text-muted-foreground">{Number(restaurant.deliveryFee) === 0 ? "Entrega Grátis"
                                : formatCurrency(Number(restaurant.deliveryFee))}</span>
                        </div>

                        {/*Tempo de entrega*/}
                        <div className="flex gap-1 items-center">
                            <TimerIcon className="text-primary" size={14} />
                            <span className="text-xs text-muted-foreground">
                                {restaurant.deliveryTimeMinutes}min
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantItem;