import { useEffect, useState } from "react"
import { MenuItemT, OrderItemT } from '../types/index';

export default function useOrder(){
    const [order,setOrder] = useState<OrderItemT[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : MenuItemT) => {

        const itemExist = order.find((e)=> e.id === item.id)
        if(itemExist){
            console.log('existe')
            const updatedOrder = order.map((oe)=> oe.id === item.id ? {...oe, quantity: oe.quantity + 1} : oe)
            setOrder(updatedOrder)
        }else{
            const newItem = {...item, quantity : 1}
            setOrder([...order, newItem])
            console.log(`Agregando = ${item.name}`)
        }
    }

    const removeItem = (item : OrderItemT) =>{
        setOrder(order.filter(e=>e.id !== item.id))
    }

    const placeOrder = () => {
        console.log('Guardar Orden')
        setOrder([])
        setTip(0)
    }

    useEffect(()=>{
        
        console.log('Order:')
        console.table(order)

    },[order])

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}