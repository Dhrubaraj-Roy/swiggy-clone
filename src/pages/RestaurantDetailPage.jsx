import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PROXY_SERVER_URL, getRestaurantMenuUrl } from "../services/swiggyApi";
import RestaurantMenuCategory from "../components/restaurant/RestaurantMenuCategory";
import RestaurantMenuShimmer from "../components/shimmers/RestaurantMenuShimmer";

export default function RestaurantDetailPage() {
    const { id } = useParams();
    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        async function fetchMenu() {
            try {
                const response = await fetch(PROXY_SERVER_URL + getRestaurantMenuUrl(id));
                const data = await response.json();
                setRestaurantData(data);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
            }
        }
        fetchMenu();
    }, [id]);

    if (!restaurantData) {
        return <RestaurantMenuShimmer />;
    }

    const restInfo = restaurantData?.data?.cards?.[2]?.card?.card?.info;
    const menuCategories = restaurantData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.itemCards
    ) || [];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header info */}
            <h1 className="font-bold mb-4 text-3xl md:text-4xl text-gray-800">
                {restInfo?.name}
            </h1>

            {restInfo?.cloudinaryImageId && (
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl mb-6 shadow-sm">
                    <img 
                        className="w-full h-full object-cover" 
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.cloudinaryImageId} 
                        alt={restInfo?.name} 
                    />
                </div>
            )}

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-8 shadow-xs">
                <div className="flex items-center gap-2 font-bold text-gray-800 text-base">
                    <span className="flex items-center gap-1 bg-green-700 text-white text-xs px-2 py-0.5 rounded-full">
                        ★ {restInfo?.avgRating}
                    </span>
                    <span>({restInfo?.totalRatingsString})</span>
                    <span className="text-gray-400">•</span>
                    <span>{restInfo?.costForTwoMessage}</span>
                </div>

                <p className="text-[#ff5200] font-medium text-sm mt-2">
                    {restInfo?.cuisines?.join(", ")}
                </p>

                <div className="flex gap-2 text-sm mt-2 text-gray-600">
                    <span className="text-green-600 font-semibold">{restInfo?.timingsInfo?.status}</span>
                    <span>{restInfo?.timingsInfo?.message}</span>
                </div>
            </div>

            {/* Menu categories */}
            <div>
                {menuCategories.map((category) => (
                    <RestaurantMenuCategory 
                        key={category?.card?.card?.title} 
                        menuCategory={category} 
                    />
                ))}
            </div>
        </div>
    );
}
