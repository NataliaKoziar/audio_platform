import React from 'react'

interface ProgressProps{
    left:number;
    right:number;
    onChange:(e: any)=>void
}

const Progress:React.FC<ProgressProps> = ({left, right, onChange}) => {
  return (
    <div style={{display: 'flex'}}>
      <input
       type='range'
       min={left}
       max={right}
       value={left}
       onChange={onChange}
       />
      <div>{left} / {right}</div>
    </div>
  )
}

export default Progress
