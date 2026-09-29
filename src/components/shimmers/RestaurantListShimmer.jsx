export default function RestaurantListShimmer() {
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-12 gap-6 justify-center">
            {Array(12).fill(0).map((_, index) => (
                <div key={index} className="w-[280px] animate-pulse">
                    {/* Image skeleton */}
                    <div className="w-full h-44 rounded-2xl bg-gray-200" />
                    
                    {/* Text skeletons */}
                    <div className="mt-3 space-y-2">
                        <div className="h-5 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        <div className="h-3 bg-gray-200 rounded w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    );
}
