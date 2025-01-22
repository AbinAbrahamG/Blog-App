import React from 'react'
import Navbar from './Navbar'

const Main1 = ({child}) => {
  return (
    <div>
        <Navbar/>
        {child}
    </div>
  )
}

export default Main1