import { useRef } from "react";
import { stackedDetails } from "../../data/restaurantsData";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantOptions() {
    const scrollRef = useRef();

    const scroll = (offset) => {
        scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
    };

    return (
        <section className="w-[80%] mx-auto mt-8 mb-16">
            <div className="flex justify-between items-center my-4">
                <h2 className="text-2xl font-bold">Discover best restaurants on Dineout</h2>
                <div className="flex gap-2">
                    <button 
                        onClick={() => scroll(-400)} 
                        className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-full text-lg cursor-pointer transition"
                    >
                        ←
                    </button>
                    <button 
                        onClick={() => scroll(400)} 
                        className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-full text-lg cursor-pointer transition"
                    >
                        →
                    </button>
                </div>
            </div>

            <div ref={scrollRef} className="grid grid-rows-1 grid-flow-col auto-cols-max gap-4 overflow-x-auto no-scrollbar scroll-smooth">
                {stackedDetails.map((res) => (
                    <RestaurantCard key={res?.info?.id || res?.cta?.link} res={res} />
                ))}
            </div>
        </section>
    );
}
