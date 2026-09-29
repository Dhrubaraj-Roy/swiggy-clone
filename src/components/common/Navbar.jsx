import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Navbar() {
    const count = useSelector((state) => state.cart.count);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        className="h-10 object-contain"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                        alt="Swiggy Logo"
                    />
                </Link>

                <div className="flex items-center gap-8">
                    <Link
                        to="/restaurants"
                        className="text-gray-700 font-semibold hover:text-[#ff5200] transition"
                    >
                        Restaurants
                    </Link>
                    <Link
                        to="/checkout"
                        className="flex items-center gap-2 font-bold text-gray-800 hover:text-[#ff5200] transition"
                    >
                        <span className="text-xl">🛒</span>
                        <span>Cart</span>
                        <span className="bg-[#ff5200] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                            {count}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
