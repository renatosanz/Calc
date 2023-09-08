import React, { useEffect, useRef } from 'react'
import '../CalcBox.css'
import printNumber from '../calcEngine/CalcEngine'

export default function Button({value,fun,selector}) {

  const handleKeyDown = event => {
    if (!isNaN(event.key) || isSymbol(event.key)) {
      console.log('User pressed: ', event.key);
      printNumber(event.key,fun)
    }
  };

  const ref = useRef(null);
  const symbols = ["!","(",")","/","-","*","+","Enter","E","Backspace"]
  const isSymbol=(value)=>{
    if (symbols.includes(value)) return true
    else return false
  }

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div ref={ref} id={selector} tabIndex={-1} onKeyDown={handleKeyDown} onClick={()=>printNumber(value,fun)} aria-pressed className='no-select flexCont roundBorder'>
      <div style={{margin:'auto'}}>
        {value}
      </div>
    </div>
  )
}
