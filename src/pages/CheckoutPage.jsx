import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { addItems, IncrementItems, DecrementItems, clearCart } from "../store/cartSlice";

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const totalCount = useSelector((state) => state.cart.count);

    const totalPrice = items.reduce((acc, item) => {
        const itemPrice = (item?.price || item?.defaultPrice || 0) / 100;
        return acc + itemPrice * item.quantity;
    }, 0);

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800">
                    Your Cart <span className="text-gray-500 text-xl font-normal">({totalCount} items)</span>
                </h1>
                {items.length > 0 && (
                    <button
                        onClick={() => dispatch(clearCart())}
                        className="text-sm font-semibold text-red-600 hover:text-red-700 cursor-pointer"
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            {items.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-6xl mb-4">🛒</p>
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty</h2>
                    <p className="text-gray-500 mb-6">Good food is always just a few clicks away!</p>
                    <Link
                        to="/restaurants"
                        className="inline-block bg-[#ff5200] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e04800] transition"
                    >
                        Explore Restaurants
                    </Link>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm divide-y divide-gray-100">
                        {items.map((item) => {
                            const price = (item?.price || item?.defaultPrice || 0) / 100;
                            return (
                                <div key={item.id} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                                    <div className="flex-1 pr-4">
                                        <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                                        <p className="text-gray-600 text-sm font-medium mt-1">₹{price} each</p>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-xs">
                                            <button 
                                                className="w-8 h-8 flex items-center justify-center text-green-600 font-bold hover:bg-gray-50 cursor-pointer"
                                                onClick={() => dispatch(DecrementItems(item))}
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                                            <button 
                                                className="w-8 h-8 flex items-center justify-center text-green-600 font-bold hover:bg-gray-50 cursor-pointer"
                                                onClick={() => dispatch(IncrementItems(item))}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span className="font-bold text-gray-800 w-20 text-right">
                                            ₹{(price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Order Summary Bill */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-800 text-lg mb-4">Bill Details</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Item Total</span>
                                <span>₹{totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span className="text-green-600 font-semibold">FREE</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Platform Fee</span>
                                <span>₹6.00</span>
                            </div>
                            <hr className="my-3 border-gray-200" />
                            <div className="flex justify-between font-bold text-lg text-gray-800 pt-1">
                                <span>To Pay</span>
                                <span>₹{(totalPrice + 6).toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-[#60b246] hover:bg-[#529d3b] text-white font-bold py-3.5 rounded-xl transition cursor-pointer text-base uppercase tracking-wider">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
