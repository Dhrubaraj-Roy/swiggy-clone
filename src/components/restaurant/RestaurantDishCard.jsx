import { useDispatch, useSelector } from "react-redux";
import { addItems, IncrementItems, DecrementItems } from "../../store/cartSlice";

export default function RestaurantDishCard({ info }) {
    const dispatch = useDispatch();

    const cartItem = useSelector((state) => 
        state.cart.items.find((item) => item.id === info?.id)
    );
    const count = cartItem ? cartItem.quantity : 0;

    return (
        <div className="my-2 mt-5">
            {/* Veg / Non-Veg Icon */}
            {info?.isVeg === 1 ? (
                <div title="Pure Veg" className="mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="36" height="36" rx="4" className="fill-white stroke-green-700" strokeWidth="2" />
                        <circle cx="20" cy="20" r="10" className="fill-green-700" />
                    </svg>
                </div>
            ) : (
                <div title="Non-Veg" className="mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="36" height="36" rx="4" className="fill-white stroke-red-700" strokeWidth="2" />
                        <polygon points="20,10 32,30 8,30" className="fill-red-700" />
                    </svg>
                </div>
            )}

            <div className="w-full flex justify-between items-start gap-4 pb-6 border-b border-gray-200">
                <div className="w-3/4">
                    <p className="font-semibold text-lg text-gray-800">{info?.name}</p>
                    <p className="font-medium text-gray-700 mt-1">
                        ₹{(info?.price || info?.defaultPrice) / 100}
                    </p>
                    {info?.description && (
                        <p className="font-light text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
                            {info?.description}
                        </p>
                    )}
                </div>

                <div className="relative w-36 h-32 flex-shrink-0 flex flex-col items-center">
                    {info?.imageId ? (
                        <img  
                            className="w-full h-full object-cover rounded-2xl shadow-sm" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.imageId} 
                            alt={info?.name} 
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 rounded-2xl border border-gray-200" />
                    )}

                    {count === 0 ? (
                        <button 
                            className="absolute -bottom-3 w-24 py-1.5 font-bold bg-white text-green-600 border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 uppercase text-sm cursor-pointer transition" 
                            onClick={() => dispatch(addItems(info))}
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="absolute -bottom-3 w-24 py-1.5 font-bold bg-white text-green-600 border border-gray-200 rounded-lg shadow-md uppercase text-sm flex justify-between items-center px-1">
                            <button className="w-7 hover:bg-gray-100 rounded cursor-pointer" onClick={() => dispatch(DecrementItems(info))}>-</button>
                            <span className="text-center">{count}</span>
                            <button className="w-7 hover:bg-gray-100 rounded cursor-pointer" onClick={() => dispatch(IncrementItems(info))}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
