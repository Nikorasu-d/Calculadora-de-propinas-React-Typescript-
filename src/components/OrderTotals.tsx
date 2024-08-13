import { useCallback} from "react"
import { OrderItemT } from "../types"
import formatCurrency from "../helpers"

type OrderTotalProps={
    order : OrderItemT[]
    tip : number
    placeOrder : () => void
}

export default function OrderTotals({order,tip,placeOrder}:OrderTotalProps) {
    //UseCallback es lo mismo que UseMemo pero con funciones
    const subTotalAmount = useCallback(()=>order.reduce((total,item) => (total + (item.price * item.quantity)),0),[order])
    const tipAmount = useCallback(() => subTotalAmount() * tip, [order, tip])
    const totalAmount = useCallback(() => subTotalAmount() + tipAmount(),[order,tip])

    return (
        <>
            <div className='space-y-3'>
                <h2 className='font-black text-2xl'>Totales y Propinas:</h2>
                <p>Subtotal a Pagar:{' '}
                    <span className="font-bold">{formatCurrency(subTotalAmount())}</span>
                </p>
                <p>Propina:{' '}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>
                <p>Total a Pagar:{' '}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>
            <button 
            className="w-full bg-black text-white mt-10 font-black uppercase p-3 disabled:opacity-10"
            disabled={totalAmount() === 0}
            onClick={()=>placeOrder()}
            >
                Guardar Orden
            </button>
        </>
    )
}
