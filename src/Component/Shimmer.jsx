
export default function Shimmer() {
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {Array(12).fill(0).map((_, index) => (
                <div key={index} className="max-w-70 w-full animate-pulse">
                    {/* Image skeleton */}
                    <div className="w-70 h-45 rounded-xl bg-gray-200" />
                    
                    {/* Text skeletons */}
                    <div className="ml-3 mt-3 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                        <div className="h-3 bg-gray-200 rounded w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    );
}
