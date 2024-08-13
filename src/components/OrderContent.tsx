import formatCurrency from "../helpers"
import { OrderItemT } from "../types"

type OrderContentProps ={
    order : OrderItemT[]
    removeItem : (item : OrderItemT) => void
}

export default function OrderContent({order, removeItem} : OrderContentProps) {
  return (
    <>
        <div>
            <h2 className="text-center font-bold text-3xl">Consumo</h2>
        </div>
        <div className="space-y-3 pt-8"> 
            {order.map((item)=>(
                <div
                className="flex justify-between border-t py-5 last-of-type:border-b" 
                key={item.id}>
                    <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - Total : {formatCurrency(item.price*item.quantity)}
                        </p>
                    </div>
                    <div>
                        <button
                        onClick={()=>removeItem(item)}
                        className="bg-red-600 h-10 w-10 rounded-full text-white font-black hover:bg-red-400 my-auto">
                            X
                        </button>
                    </div>
                </div>
            ))}
        </div>
        
    </>
  )
}
