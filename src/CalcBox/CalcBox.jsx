import React, { useState } from 'react'
import './CalcBox.css'
import Screen from './Screen'
import valueText from "./calcEngine/ValueNumber"
import NumberPad from './NumberPad'
import ExtendFunc from './ExtendFunc'
import Functions from './Functions'

export default function  CalcBox() {
  const [exprs,setExpr] = useState(valueText.val)
  
  const gridToggle = "3fr 4fr 3fr"
  const gridUntoggle = "1fr 4fr 3fr"
  const [grid, setGrid] = useState(gridUntoggle)

  const changeExpr=()=>{
    setExpr(valueText.val)
  }

  const toggleExtendPad =()=>{
    if (!valueText.toggle) {
      setGrid(gridToggle)
    }else{
      setGrid(gridUntoggle)
    }
  }

  return (
    <div id='content' className='roundBorder'>
      <div className='flexCont fullHeightWidth'>
        <div id='subContent' className='fullHeightWidth'>
          <Screen exprs={exprs}/>
          <div id='ButtonBox' className='fullHeightWidth roundBorder'>
          <div id='gridButton' style={{gridTemplateColumns: grid}} className='fullHeightWidth'>
              <ExtendFunc fun={changeExpr} togglePad={toggleExtendPad}/>
              <NumberPad fun={changeExpr}/>
              <Functions fun={changeExpr}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
