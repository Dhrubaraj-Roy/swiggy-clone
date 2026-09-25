export default function RestaurantCard({ res }) {
    return (
        <a href={res?.cta?.link || "#"} className="w-81 h-47 shrink-0 cursor-pointer relative">
            <img
                className="w-full h-full object-cover"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + res?.info?.mediaFiles[0]?.url}
                alt={"food item"}
            />

            <div className="bg-linear-to-t from-black to-transparent absolute inset-0"></div>

            <h3 className="absolute bottom-0 left-0 text-white ml-2">{res?.info?.name}</h3>
            <p className="absolute bottom-0 right-0 text-white mr-2">{res?.info?.rating?.value}</p>
        </a>
    )
}


