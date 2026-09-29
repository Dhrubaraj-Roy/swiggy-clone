import { useState } from "react";
import RestaurantDishCard from "./RestaurantDishCard";

export default function RestaurantMenuCategory({ menuCategory }) {
    const itemCards = menuCategory?.card?.card?.itemCards || [];
    const [isOpen, setIsOpen] = useState(true);
    const [filter, setFilter] = useState("all");

    const filterItems = itemCards.filter((item) => {
        if (filter === "veg") return item?.card?.info?.isVeg === 1;
        if (filter === "nonveg") return !item?.card?.info?.isVeg;
        return true;
    });

    const categoryTitle = menuCategory?.card?.card?.title || "Recommended";

    if (!isOpen) {
        return (
            <div className="relative mb-6 border-b border-gray-100 pb-4">
                <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h3 className="text-xl font-bold text-gray-800">
                        {categoryTitle} ({itemCards.length})
                    </h3>
                    <span className="text-2xl text-gray-500">⌄</span>
                </div>
            </div>
        );
    }

    return (
        <div className="my-6 border-b-8 border-gray-100 pb-6">
            <div 
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-2xl font-bold text-gray-800">
                    {categoryTitle} ({itemCards.length})
                </h3>
                <span className="text-2xl text-gray-500">⌃</span>
            </div>

            <div className="flex gap-3 my-4">
                <button
                    className={`px-3 py-1 border rounded-full text-xs font-semibold cursor-pointer transition ${
                        filter === "veg"
                            ? "bg-green-700 text-white border-green-700"
                            : "bg-white text-green-700 border-green-700 hover:bg-green-50"
                    }`}
                    onClick={() => setFilter(filter === "veg" ? "all" : "veg")}
                >
                    🟢 Veg
                </button>
                <button
                    className={`px-3 py-1 border rounded-full text-xs font-semibold cursor-pointer transition ${
                        filter === "nonveg"
                            ? "bg-red-700 text-white border-red-700"
                            : "bg-white text-red-700 border-red-700 hover:bg-red-50"
                    }`}
                    onClick={() => setFilter(filter === "nonveg" ? "all" : "nonveg")}
                >
                    🔴 Non-Veg
                </button>
            </div>

            <div>
                {filterItems.map((item) => (
                    <RestaurantDishCard key={item?.card?.info?.id} info={item?.card?.info} />
                ))}
            </div>
        </div>
    );
}
