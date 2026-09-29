import { Outlet } from "react-router"
import AllHead from "./AllHead"
export default function Head(){
    return(
        <>
        <AllHead></AllHead>
        <Outlet></Outlet>
        </>
    )
}