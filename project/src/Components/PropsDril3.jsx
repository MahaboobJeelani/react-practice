import React, { useContext } from 'react'
import { useData } from './PropsDrilContext'

const PropsDril3 = (x) => {
  let user = useContext(useData)
  return (
    <div>
      <h1>
        {/* {x.data3} */}
        {user} Good Morning</h1>
    </div>
  )
}

export default PropsDril3
