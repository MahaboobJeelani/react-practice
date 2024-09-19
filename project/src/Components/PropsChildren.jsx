import React from 'react'

const PropsChildren = (Props) => {
  console.log(Props);
  return (
    <div>
      <h1>{Props.data} {Props.children}</h1>
    </div>
  )
}

export default PropsChildren
