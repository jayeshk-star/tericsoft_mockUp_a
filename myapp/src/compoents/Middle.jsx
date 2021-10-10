import React, { useEffect, useState } from 'react'
import './Middle.css'

const Middle = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/middle')
      .then(res => res.json())
      .then(res => setdata(res))
  }, [])
  console.log(data)

  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div className='taskname' key={index}>
              {item}
            </div>
          </>
        )
      })}
    </>
  )
}

export default Middle
