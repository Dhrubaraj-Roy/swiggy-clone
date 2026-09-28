
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestMenuCard from "./RestMenuCard";
export default function FetchMenu() {
    let { id } = useParams();
    // console.log("hello here is the id : "+id);
    const [ResData, setResData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6426028&lng=77.21921669999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();

            setResData(data);
        }
        fetchData();
    }, [])

    const restMenu = ResData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;    

console.log("ehere is the error "+Re)

    return (
        <div className="w-[70%] mx-auto mt-40 ml-100">
            

            <div>
               
                {restMenu.map((menuIteam)=> <RestMenuCard key={menuIteam?.card?.card?.title} menuIteam={menuIteam}></RestMenuCard>)}
            </div>
        </div>
    )
}



