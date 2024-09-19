import React from 'react'
import PropsDril2 from './PropsDril2'

const PropsDri1 = (x) => {
  console.log(x);
  return (
    <div>
      <PropsDril2 data2={x.data}/>
    </div>
  )
}

export default PropsDri1
