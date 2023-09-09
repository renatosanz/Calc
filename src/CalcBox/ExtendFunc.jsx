import React, { useState } from 'react'
import Button from './buttons/Button'
import ValueText from './calcEngine/ValueNumber'
import './CalcBox.css'


export default function ExtendFunc({fun,togglePad}) {

  const symbolsUntoggle = ["E","PI","^"]
  const symbolsToggle = ["sin","E","cos","PI","tan","^","!"]
  const [symbols, setSymbols] = useState(symbolsUntoggle)

  const columnsToggle = "1fr 1fr"
  const columnsUntoggle = "1fr"
  const [columns , setColumns] = useState(columnsUntoggle)

  const toggleCard = () => {
    if (ValueText.toggle){
      setSymbols(symbolsUntoggle)
      setColumns(columnsUntoggle)
    }else{
      setSymbols(symbolsToggle)
      setColumns(columnsToggle)
    }
    togglePad()
    ValueText.toggle = !ValueText.toggle
  }
  return (
    <div id='ExtendFunc' style={{}}>
        <Button value={"▶"} sendFun={toggleCard} selector={"ExtendButton"}/>
      {
        symbols.map((value) => (
          <Button value={value} sendFun={fun} selector={'ExtendButton'}/>
        ))
      }
    </div>
  )
}
