import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import { db } from "@/app/_lib/prisma";

const RecomendedRestaurant = async () => {
    const restaurants = await db.restaurant.findMany({

    })

    return ( 
        <>
            <Header />
            <div className="py-6 px-5">
                <h2 className="mb-6 font-semibold text-lg">Restaurantes Recomendados</h2>
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

export default RecomendedRestaurant;