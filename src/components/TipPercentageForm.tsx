import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-0',
        value: 0,
        label: '0%'
    },
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps ={
    setTip : Dispatch<SetStateAction<number>>
    tip:number
}

export default function TipPercentageForm({setTip,tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">
            Propina:
        </h3>
        <form action="" className="space-y-1 mt-3">
            {tipOptions.map(tipOption => (
                <div className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                    id={tipOption.id} 
                    type="radio"
                    name="tipOption"
                    value={tipOption.value}
                    onChange={ e => setTip(+e.target.value)}// + is for Cast number
                    checked = {tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
