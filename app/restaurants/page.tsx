"use client"

import { Restaurant } from "@prisma/client";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchForRestaurants } from "./_actions/search";
import Header from "../_components/header";
import RestaurantItem from "../_components/restaurant-item";

const Restaurants = () => {
    const searchParams = useSearchParams();
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const searchFor = searchParams.get("search");
            if (!searchFor) return
            const foundRestaurant = await searchForRestaurants(searchFor);
                setRestaurants(foundRestaurant)
        }

        fetchRestaurants()
    }, [searchParams])

    const searchFor = searchParams.get("search");

    if (!searchFor) {
        return notFound();
    }

    return ( 
        <>
            <Header />
            <div className="py-6 px-5">
                <h2 className="mb-6 font-semibold text-lg">Restaurantes Encontrados</h2>
            <div className="flex w-full flex-col gap-6">
            {restaurants.map((restaurant) => (
                <RestaurantItem
                    key={restaurant.id}
                    restaurant={restaurant}
                    className="min-wfull max-w-full"
                />
            ))}
            </div>
        </div>
        </>
    );
}

export default Restaurants;