import React, { useState } from 'react'

const Factor = () => {
  let arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let fac = () => {

  }
  let [num, setNum] = useState(0)
  return (
    <div>
      <input type="number" value={num} onChange={(x) => { setNum(x.target.value) }} />
      <p>{arrnum.map((x) => {
        return (
          <div>
            {x * num}
          </div>
        )
      })}</p>
    </div>
  )
}

export default Factor
