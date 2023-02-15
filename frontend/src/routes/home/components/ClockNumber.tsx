import React from 'react'

const ClockNumber: React.FC<{number: number}> = ({ number }) => {
  return (
    <div
      className="number-hand"
      style={{"--deg": `${30 * number}deg`} as React.CSSProperties}
    >
      <div className='number'>{number}</div>
    </div>
  )
}

export default ClockNumber
