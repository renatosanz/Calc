import React from 'react'
import Button from './buttons/Button'
import './CalcBox.css'

export default function Functions({fun}) {
  const sybols = ["(","AC",")","/","-","*","+"]
  return (
    <div id='normalFunc'>
      {
        sybols.map((value) => (
          <Button value={value} sendFun={fun} selector={'operatorButtons'}/>
        ))
      }
      <Button value={"="} sendFun={fun} selector={'resultButton'}/>
    </div>
  )
}
