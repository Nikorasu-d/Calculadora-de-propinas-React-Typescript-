import { MenuItemT } from "../types"

type menuItemsProps ={
    item : MenuItemT
    addItem : (item : MenuItemT) => void
}

export default function MenuItem({item, addItem} : menuItemsProps ) {

    
    return (
        <button
        className="border-2 border-black w-full p-3 flex justify-between hover:bg-slate-400 rounded-lg"
        onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">Precio: ${item.price}</p>
        </button>
    )
}
