import React, { useState } from 'react'
import Boton from './Boton'
// rafc
const Add = ({ add }) => {
    const [name, setName] = useState('');
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id="" />
      {name}<input type="number" name="" id="" />
      <Boton name="Add" />
    </div>
  )
}

export default Add
