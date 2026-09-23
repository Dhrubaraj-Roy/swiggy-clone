export default function Header(){
    return(
        <header className="bg-[#ff5200]  font-serif  ">
        <div>
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="logo"></img>
                <div className=" text-white items-center text-base flex font-bold gap-15 items-center ">
                    <a href="#">Swiggy Corporate</a>
                    <a href="#">Partner with Us</a>
                    <a href="#" className="border border-white py-3 px-4 rounded-2xl">Get the App</a>
                    <a href="#" className="border border-black bg-black text-white py-3 px-4 rounded-2xl">Sign in</a>
                </div>
            </div>
            
        </div>
        <div className="pt-16 pb-8 relative">
            <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
            <div className="text-white text-5xl max-w-[60%]  text-center container mx-auto">
                Order food & groceries. Discover best restaurants. Swiggy it!
            </div>
            <div className="max-w-[70%] container mx-auto mt-10 flex gap-10 ">
                <input type="text" placeholder="Enter your delivery location"  className="bg-white w-[40%] h-16 px-4 rounded-2xl " />
                <input type="text" placeholder="Search for restaurant, item and more" className="bg-white w-[55%] h-16 px-4 rounded-2xl"/>
            </div>
        </div>
        <div className="max-w-[80%] flex container mx-auto">
            <a href="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            </a>
            <a href="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
            </a>
            <a href="">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
            </a>
            <a href="">
                <img src="" alt="" />
            </a>
        </div>
        </header>
    )
}