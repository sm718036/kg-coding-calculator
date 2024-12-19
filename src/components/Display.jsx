import React from 'react'

function Display({valueEntered}) {
  return (
    <div>
      <input type="text" value={valueEntered} readOnly />
    </div>
  )
}

export default Display
