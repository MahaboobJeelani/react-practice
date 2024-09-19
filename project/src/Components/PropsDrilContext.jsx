import React, { createContext } from 'react'
import PropsDri1 from './PropsDri1'

export let useData = createContext()

const PropsDrilContext = () => {
  return (
    // we are using the useContext() to share the data to the child components without using props now we are share the data in the PropsDril3.jsx
    <div>
      <useData.Provider value="hi">
        <PropsDri1 />
      </useData.Provider>
    </div> 
  )
}

export default PropsDrilContext
