import React from 'react'
import Component2 from './Component2'

const Component1 = ({user}) => {
  return (
    <>
    <div>Component1 {user}</div>
    <Component2 user = {user}/>
    </>
  )
}

export default Component1