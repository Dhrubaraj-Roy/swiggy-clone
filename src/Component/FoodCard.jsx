export default function FoodCard({ food }) {
    return (
        <div className="w-36 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200">
            <a href={food?.action?.link || "#"}>
                <img 
                    className="w-full h-auto object-cover" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + food?.imageId} 
                    alt={food?.accessibility?.altText || "food item"} 
                />
            </a>
        </div>
    )
}