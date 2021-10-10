import React, { useEffect, useState } from 'react'
import './Card.css'

const Card = () => {
  const [carddata, setCarddata] = useState([])
  useEffect(() => {
    fetch('  http://localhost:3004/BMX')
      .then(res => res.json())
      .then(res => setCarddata(res))
  }, [])
  console.log(carddata)
  return (
    <>
      {carddata.map(item => {
        return (
          <>
            <div className='card_contain'>
              <img src={item.img} className='img_contain' />
              <div className='card_data'>
                <p>
                  {item.day} <span className='rigth'>5.12</span>
                </p>

                {item.heart.map(items => {
                  return (
                    <>
                      <button className="button">{items}</button>
                    </>
                  )
                })}
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Card
