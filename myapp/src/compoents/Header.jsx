import React from 'react'
import './Header.css'
// import { AiFillStar } from 'react-icons/ai';
var icons = [
  'Featured',
  'Armoury',
  'Aquatics',
  'Cycling',
  'Equestrian',
  'Extreme',
  'Golf',
  'Gymanastics',
  'Lake&Sea'
]

const Header = () => {
  return (
    <div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
      <div className='icon_contain'></div>
    </div>
  )
}

export default Header
