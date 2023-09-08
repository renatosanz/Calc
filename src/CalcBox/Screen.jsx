import './CalcBox.css'

export default function Screen({exprs}) {

  return (
    <div id='Screen' className='fullHeightWidth roundBorder'>
      <div id='screenCont' className='flexCont fullHeightWidth'>
        <input value={exprs} id='screenText' className='fullHeightWidth' type="text" pattern="[0-9]*" title="Ingresa solo números" required>
        </input>
      </div>
    </div>
  )
}
