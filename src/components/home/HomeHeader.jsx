import { Link } from "react-router";

export default function HomeHeader() {
    return (
        <header className="bg-[#ff5200] font-sans">
            <div>
                <div className="flex justify-between container mx-auto py-8 px-4">
                    <img 
                        className="w-40 h-12 object-contain" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" 
                        alt="Swiggy Logo" 
                    />
                    <div className="text-white items-center text-base flex font-bold gap-8">
                        <a href="#" className="hover:underline">Swiggy Corporate</a>
                        <a href="#" className="hover:underline">Partner with Us</a>
                        <a href="#" className="border border-white py-2.5 px-4 rounded-xl hover:bg-white hover:text-[#ff5200] transition">Get the App</a>
                        <a href="#" className="border border-black bg-black text-white py-2.5 px-4 rounded-xl hover:bg-gray-800 transition">Sign in</a>
                    </div>
                </div>
            </div>

            <div className="pt-12 pb-8 relative">
                <img className="h-96 w-52 absolute top-0 left-0 hidden md:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="h-96 w-52 absolute top-0 right-0 hidden md:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                
                <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl text-center mx-auto px-4 leading-tight">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </h1>

                <div className="max-w-3xl mx-auto mt-8 flex flex-col md:flex-row gap-4 px-4">
                    <input 
                        type="text" 
                        placeholder="Enter your delivery location" 
                        className="bg-white w-full md:w-[45%] h-14 px-4 rounded-xl shadow-sm outline-none" 
                    />
                    <input 
                        type="text" 
                        placeholder="Search for restaurant, item and more" 
                        className="bg-white w-full md:w-[55%] h-14 px-4 rounded-xl shadow-sm outline-none" 
                    />
                </div>
            </div>

            <div className="max-w-5xl flex justify-center gap-4 mx-auto pb-8 px-4">
                <Link to="/restaurants" className="hover:scale-105 transition-transform">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Food Delivery" />
                </Link>
                <a href="#" className="hover:scale-105 transition-transform">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="Instamart" />
                </a>
                <a href="#" className="hover:scale-105 transition-transform">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="Dineout" />
                </a>
            </div>
        </header>
    );
}
