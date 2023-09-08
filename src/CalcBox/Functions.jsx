import React from 'react'
import Button from './buttons/Button'
import './CalcBox.css'

export default function Functions({fun}) {
  const sybols = ["(","AC",")","/","-","*","+"]
  return (
    <div id='normalFunc'>
      {
        sybols.map((value) => (
          <Button value={value} fun={fun} selector={'operatorButtons'}/>
        ))
      }
      <Button value={"="} fun={fun} selector={'resultButton'}/>
    </div>
  )
}
