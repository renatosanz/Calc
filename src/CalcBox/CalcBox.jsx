import React, { useState } from 'react'
import './CalcBox.css'
import Screen from './Screen'
import valueText from "./calcEngine/ValueNumber"
import NumberPad from './NumberPad'
import ExtendFunc from './ExtendFunc'
import Functions from './Functions'

export default function  CalcBox() {
  const [exprs,setExpr] = useState(valueText.val)

  const changeExpr=()=>{
    setExpr(valueText.val)
  }
  return (
    <div id='content' className='roundBorder'>
      <div className='flexCont fullHeightWidth'>
        <div id='subContent' className='fullHeightWidth'>
          <Screen exprs={exprs}/>
          <div id='ButtonBox' className='fullHeightWidth roundBorder'>
            <div id='gridButton' className='fullHeightWidth'>
              <ExtendFunc fun={changeExpr}/>
              <NumberPad fun={changeExpr}/>
              <Functions fun={changeExpr}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
