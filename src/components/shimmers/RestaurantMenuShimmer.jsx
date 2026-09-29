export default function RestaurantMenuShimmer() {
    return (
        <div className="max-w-4xl mx-auto mt-8 px-4 animate-pulse space-y-6">
            {/* Restaurant Title Skeleton */}
            <div className="h-10 w-64 bg-gray-200 rounded-lg"></div>

            {/* Banner Image Skeleton */}
            <div className="w-full h-72 bg-gray-200 rounded-2xl"></div>

            {/* Restaurant Info Skeleton */}
            <div className="space-y-3 pt-2">
                <div className="h-5 w-48 bg-gray-200 rounded"></div>
                <div className="h-4 w-60 bg-gray-200 rounded"></div>
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
            </div>

            <hr className="w-full my-6 border-gray-200" />

            {/* Category Title Skeleton */}
            <div className="h-7 w-48 bg-gray-200 rounded-md"></div>

            {/* Menu Items Skeletons */}
            <div className="space-y-6 mt-4">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex justify-between items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-3/4 space-y-3">
                            <div className="h-5 w-52 bg-gray-200 rounded"></div>
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                            <div className="h-3 w-full bg-gray-200 rounded"></div>
                            <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                        </div>
                        <div className="w-36 h-32 bg-gray-200 rounded-2xl flex-shrink-0"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
