// this value will face the student data adn RestaurentMenu.js of negi

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestMenuCard from "./RestMenuCard";
export default function FetchRestaurent() {
    let { id } = useParams();
    // console.log("hello here is the id : "+id);
    const [ResData, setResData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            // const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=${id}`;
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            // console.log(data?.data?.cards[2]?.card?.card?.info)

            setResData(data);
        }
        fetchData();
    }, [])

        const restInfo = ResData?.data?.cards[2]?.card?.card?.info;
        const restMenu = ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c?.card?.card?.itemCards
        ) || [];
            

      


    return (
        <div className="w-[70%] mx-auto mt-40 ml-100">
            <h2 className="font-bold mb-10 text-5xl">{restInfo?.name}</h2>
            <img className="w-200 h-70 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.cloudinaryImageId} alt={""} />
            <div className="gap-2 mt-2 ml-2 font-bold">
            <div className="flex gap-2">
                <svg
                className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle
                    cx="128"
                    cy="128"
                    r="110"
                    className="fill-green-500"
                />

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
                <p>{restInfo?.avgRating}</p>
                <p>({restInfo?.totalRatingsString})</p>
                <p className="text-base text-gray-400">·</p>
                <p>{restInfo?.costForTwoMessage}</p>
            </div>
            <p className="text-[#ff5200] underline ">{restInfo?.cuisines?.join(" ")}</p>
            <div className="flex gap-2 text-sm ">
                <p className="text-green-500">{restInfo?.timingsInfo?.status}</p>
                <p className="text-gray-400">{restInfo?.timingsInfo?.message}</p>
            </div>
            <hr className="w-[70%] mt-4 mb-6 text-gray-300"></hr>


            </div>

            <div>
               
                {restMenu?.map((menuIteam)=> <RestMenuCard key={menuIteam?.card?.card?.title} menuIteam={menuIteam}></RestMenuCard>)}
            </div>
        </div>
    )
}



