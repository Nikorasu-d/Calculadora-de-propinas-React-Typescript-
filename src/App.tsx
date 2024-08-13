import { menuItems } from "./data/db"
import MenuItem from './components/MenuItem';
import useOrder from "./hooks/useOrder";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const {order,tip,setTip,addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-slate-700 py-3">
        <div className="font-black text-4xl text-center text-white">Calculadora de Propinas y Consumos</div>
      </header>
      <main className="max-w-7xl mx-auto py-10 grid grid-cols-2">
        <div className="p-5">
          <h2 className="text-center font-bold text-3xl mt-2">Menú</h2>
          <div
          className="space-y-2 mt-10"
          >
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
          
        </div>
        <div className="border-2 border-slate-700 border-dashed p-5  rounded-lg space-y-2">
          {order.length > 0?
          <>
            <OrderContent
              order = {order}
              removeItem = {removeItem} 
            />
            <TipPercentageForm
              setTip = {setTip}
              tip={tip}
            />
             <OrderTotals
                order = {order}
                tip = {tip}
                placeOrder={placeOrder}
             />
          </>
          :
            <p className="text-center font-black uppercase mt-10">La orden está vacia</p>
          }
            
        </div>
       
        
        
      </main>
    </>
  )
}

export default App
