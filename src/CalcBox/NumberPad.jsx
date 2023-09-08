import React from 'react'
import './CalcBox.css'
import Button from './buttons/Button';

export default function NumberPad({fun}) {
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  return (
    <div id='NumberPad'>
      {
        numbers.map((index) => (
        <Button value={index} fun={fun} selector={'Button'}/>
      ))
      }
      <Button value={"."} fun={fun} selector={'Button'}/>
      <Button value={"⌫"} fun={fun} selector={'RetroButton'}/>
    </div>
  )
}
