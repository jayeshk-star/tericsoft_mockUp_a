import React, { useEffect, useState } from 'react'
import './Middle.css'

const Middle = () => {
  const [data, setdata] = useState([])
  const [isloading, setisloding] = useState(true)
  const [iserror, setiserror] = useState(false)

  useEffect(() => {
    if (isloading) {
      fetch('http://localhost:3004/middle')
        .then(res => res.json())
        .then(res => {
          setisloding(false)
          setdata(res)
        })
        .catch(e => {
          console.log(e)
          setiserror(true)
        })
        .finally(() => {
          setiserror(false)
          setisloding(false)
        })
    }
  }, [])
  console.log(data)

  return isloading ? (
    '...loding'
  ) : iserror ? (
    'error occured'
  ) : (
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
