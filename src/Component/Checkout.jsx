import { useSelector } from "react-redux"

export default function Checkout(){
    const name = useSelector((state)=> state.cart.items);
    const totalCount = useSelector((state) => state.cart.count);

    
    return(
        <>
        {name.map((item)=>(
             <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-lg">{item.name}</span>
                <span className="text-gray-600 font-semibold">Qty: {item.quantity}</span>
            </div>
        ))}
        </>
    )
}

