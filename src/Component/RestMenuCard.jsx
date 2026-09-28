//This is the Restaurent menu whole card  menucard.js of negi
import {useState} from 'react';

export default function RestMenuCard({ menuIteam }) {
    const itemCards = menuIteam?.card?.card?.itemCards || [];
    const [isOpen, setIsOpen] = useState(true);
    const [filter, setFilter] = useState('all');








    //filter iteams based on the selected filter
    const filterItems = itemCards.filter((iteam) => {
        if (filter === 'veg') return iteam?.card?.info?.isVeg === 1;
        if (filter === 'nonveg') return !iteam?.card?.info?.isVeg;
        return true;
    });


      if(!isOpen){
            return(
                <div className="relative mb-6">
                    <p className="text-2xl font-bold">{menuIteam?.card?.card?.title}</p>
                    <button className="absolute  top-0 text-gray-500 right-90 text-4xl " onClick={()=>setIsOpen(!isOpen)}>{isOpen?'⌃':'⌄'}</button>
                    <div className='bg-gray-100 mt-4 w-[70%] h-2'></div>
                </div>
                
            )
        }

    return (
        <div className="my-4 relative">
            <p className="text-3xl font-bold">{menuIteam?.card?.card?.title}</p>
             <button className="absolute  top-0 text-gray-500 right-90 text-2xl " onClick={()=>setIsOpen(!isOpen)}>{isOpen?'⌃':'⌄'}</button>
             
             <div className="flex gap-3 my-3">
                <button className={`px-3 py-1 border rounded-full text-sm font-semibold transition ${filter === 'veg' ? 'bg-green-700 text-white' : 'bg-white text-green-700 border-green-700'}`}
                    onClick={() => setFilter(filter === 'veg' ? 'all' : 'veg')}
                >
                    🟢 Veg
                </button>
                <button
                    className={`px-3 py-1 border rounded-full text-sm font-semibold transition ${filter === 'nonveg' ? 'bg-red-700 text-white' : 'bg-white text-red-700 border-red-700'}`}
                    onClick={() => setFilter(filter === 'nonveg' ? 'all' : 'nonveg')}
                >
                    🔴 Non-Veg
                </button>
            </div>

            

            <div>
                {filterItems.map((item) => {
                    const info = item?.card?.info;
                    return (
                        <div key={info?.id || info?.name} className="my-2  mt-5">
                            {info?.isVeg === 1 ? (
                                <p title="Pure Veg">
                                    <svg
                                        className="w-4 h-4"
                                        viewBox="0 0 40 40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="36"
                                            height="36"
                                            rx="4"
                                            className="fill-white stroke-green-700"
                                            strokeWidth="2"
                                        />
                                        <circle
                                            cx="20"
                                            cy="20"
                                            r="10"
                                            className="fill-green-700"
                                        />
                                    </svg>
                                </p>
                            ) : (
                                <p title="Non-Veg">
                                    <svg
                                        className="w-4 h-4"
                                        viewBox="0 0 40 40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="36"
                                            height="36"
                                            rx="4"
                                            className="fill-white stroke-red-700"
                                            strokeWidth="2"
                                        />
                                        <polygon
                                            points="20,10 32,30 8,30"
                                            className="fill-red-700"
                                        />
                                    </svg>
                                </p>
                            )}

                            <div className="relative ">
                                <p className="font-semibold">{info?.name}</p>
                               
                                <p>₹{(info?.price || info?.defaultPrice) / 100}</p>
                                <p className="text-wrap w-200 mb-20  font-extralight text-left">{info.description}</p>
                                <img  className = "w-39 h-36 rounded-2xl absolute bottom-15 right-50"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ info?.imageId} alt="rtrt" />
                                <button className="w-24 border border-gray-200 p-1 font-bold bg-white text-green-500 rounded-md absolute bottom-15 right-56 ">Add</button>
                                <hr className="w-[70%] mt-4"/>
                            </div>
                        </div>
                
                    );
                })}
            </div>
            
        </div>
    );
}