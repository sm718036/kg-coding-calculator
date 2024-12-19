import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import './App.css'
import { useState } from 'react'

function App() {  

  const [calVal, setCalVal] = useState('')

  const handleClick = (e) => {
    if(e.target.textContent == 'C') {
      setCalVal('')
    } else if(e.target.textContent == '=') {
      let result = eval(calVal);
      setCalVal(result.toFixed(2))
    } else {
      const newVal = calVal + e.target.textContent
      setCalVal(newVal)
    }
  }

  return (
    <div className='calculatorContainer'>
      <Display valueEntered={calVal} />
      <ButtonsContainer onClickEvent={handleClick} />
    </div>
  )
}

export default App
