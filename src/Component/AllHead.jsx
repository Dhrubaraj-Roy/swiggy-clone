import { Link } from "react-router";
import { useSelector } from "react-redux";


export default function 
AllHead(){
    const count = useSelector((state)=> state.cart.count)
    
    return (
        <div className="flex justify-around">
            <Link to={"/"}>
            <div className="bg-orange-600">
            <img className=" h-12 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="logo"></img>
            </div>
            </Link>
            <Link to={"/checkout"}>
            <p className="text-xl">Card:{`(${count})`} </p>
            </Link>
            
        </div>
    );
}