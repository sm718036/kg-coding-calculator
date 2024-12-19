import React from 'react'
import '../App.css'

function ButtonsContainer({onClickEvent}) {

  const buttons = ['7','8','9','C','4','5','6','/','1','2','3','*','0','+','-','=']

  return (
    <div className='btnsContainer'>
      {
        buttons.map(btn=><button key={btn} onClick={onClickEvent}>{btn}</button>)
      }
    </div>
  )
}

export default ButtonsContainer
