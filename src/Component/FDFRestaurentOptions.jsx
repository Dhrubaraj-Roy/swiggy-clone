import { useEffect, useState } from "react"
import FDFRestaurentCard from "./FDFRestaurentCard"

export default function FDFRestaurentOptions(){


    const [restData, setRestData] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6426028&lng=77.21921669999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[])
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {restData.map((res)=>(<FDFRestaurentCard key={res?.info?.id} res={res}></FDFRestaurentCard>))}
        </div>
        
    )
}