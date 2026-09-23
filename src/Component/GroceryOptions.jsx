import { useRef } from "react"
import { GrocerGridCard } from "./Utils/Groceries"
import GroceryCard from "./GroceryCard"

export default function GroceryOptions() {
    const scrollRef = useRef()

    const scroll = (offset) => {
        scrollRef.current.scrollBy({ left: offset, behavior: "smooth" })
    }

    return (
        <div className="w-[80%] mx-auto mt-8">
            <div className="flex justify-between items-center my-4">
                <h2 className="text-2xl font-bold">Shop groceries on Instamart</h2>
                <div className="flex gap-2">
                    <button onClick={() => scroll(-400)} className="w-9 h-9 bg-gray-200 rounded-full text-lg cursor-pointer">←</button>
                    <button onClick={() => scroll(400)} className="w-9 h-9 bg-gray-200 rounded-full text-lg cursor-pointer">→</button>
                </div>
            </div>

            <div ref={scrollRef} className="grid grid-rows-1 grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth">
                {GrocerGridCard.map((food) => (
                    <GroceryCard key={food.id} food={food} />
                ))}
            </div>
        </div>
    )
}