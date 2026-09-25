export default function FDFRestaurentCard({res}){
    return (
        
         <div className=" max-w-[280px] mb-2 transform transition duration-200 hover:scale-95    ">
            <img className="w-70 h-45 object-cover rounded-xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+res?.info?.cloudinaryImageId} alt={"food item"} />
            <div className="ml-3">
                <div className="font-bold">{res?.info?.name}</div>
            <div className="flex gap-2 ">
                
               <svg
                    className="w-6 h-6"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    {/* Green circle */}
                    <circle
                        cx="128"
                        cy="128"
                        r="110"
                        className="fill-green-500"
                    />

                    {/* Star */}
                    <path
                        d="M128 48
                        L147 101
                        L203 103
                        L159 137
                        L174 192
                        L128 161
                        L82 192
                        L97 137
                        L53 103
                        L109 101
                        Z"
                        className="fill-white"
                    />
                    </svg>
            <span>{res?.info?.avgRating}</span>
            <span className="font-bold">{res?.info?.sla?.slaString}</span>
            </div>
            <span className=" block truncate text-gray-600 text-sm">{res?.info?.cuisines}</span>
            <span className=" block truncate text-gray-600 text-sm">{res?.info?.areaName}</span>
            
            </div>
            
        </div>
    )
}
    