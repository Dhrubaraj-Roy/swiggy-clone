export default function RestaurantCard({ res }) {
    return (
        <a href={res?.cta?.link || "#"} className="w-80 h-48 shrink-0 cursor-pointer relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img
                className="w-full h-full object-cover"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + res?.info?.mediaFiles[0]?.url}
                alt={res?.info?.name || "restaurant"}
            />

            <div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute inset-0"></div>

            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                <h3 className="font-bold text-lg truncate">{res?.info?.name}</h3>
                <span className="bg-green-600 px-2 py-0.5 rounded text-xs font-bold shrink-0 ml-2">
                    ★ {res?.info?.rating?.value}
                </span>
            </div>
        </a>
    );
}
