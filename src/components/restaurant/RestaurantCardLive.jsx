import { Link } from "react-router";

export default function RestaurantCardLive({ res }) {
    const info = res?.info;

    return (
        <Link 
            to={`/city/delhi/${info?.id}`} 
            className="w-[280px] mb-4 transform transition duration-200 hover:scale-95 block"
        >
            <div className="relative w-full h-44 overflow-hidden rounded-2xl shadow-sm">
                <img 
                    className="w-full h-full object-cover" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.cloudinaryImageId} 
                    alt={info?.name || "Restaurant"} 
                />
            </div>

            <div className="mt-3 px-1">
                <h3 className="font-bold text-lg text-gray-800 truncate">{info?.name}</h3>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mt-1">
                    <span className="flex items-center gap-1 bg-green-700 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                        ★ {info?.avgRating}
                    </span>
                    <span>•</span>
                    <span>{info?.sla?.slaString}</span>
                </div>

                <p className="text-gray-500 text-sm truncate mt-1">{info?.cuisines?.join(", ")}</p>
                <p className="text-gray-400 text-xs truncate">{info?.areaName}</p>
            </div>
        </Link>
    );
}
