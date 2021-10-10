import React from 'react'
import './Header.css'
import { AiFillStar } from 'react-icons/ai'
import { GiSwissArmyKnife } from 'react-icons/gi'
import { GiStrongMan } from 'react-icons/gi'
import { GiCycling } from 'react-icons/gi'
import { GiSeahorse } from 'react-icons/gi'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'
import { GiBaseballBat } from 'react-icons/gi'
import { SiOpenaigym } from 'react-icons/si'
import { GiSeaCreature } from 'react-icons/gi'

const Header = () => {
  return (
    <div>
      <div className='icon_contain'>
        <AiFillStar className='logostyle' />
        <div className='logoname'>Featured</div>
      </div>
      <div className='icon_contain'>
        <GiSwissArmyKnife className='logostyle' />
        <div className='logoname'>Armoury</div>
      </div>
      <div className='icon_contain'>
        <GiStrongMan className='logostyle' />
        <div className='logoname'>Aquatics</div>
      </div>
      <div className='icon_contain'>
        <GiCycling className='logostyle' />
        <div className='logoname'>Cycling</div>
      </div>
      <div className='icon_contain'>
        <GiSeahorse className='logostyle' />
        <div className='logoname'>Equestrian</div>
      </div>
      <div className='icon_contain'>
        <MdAirlineSeatReclineExtra className='logostyle' />
        <div className='logoname'>Extreme</div>
      </div>
      <div className='icon_contain'>
        <GiBaseballBat className='logostyle' />
        <div className='logoname'>Golf</div>
      </div>
      <div className='icon_contain'>
        <SiOpenaigym className='logostyle' />
        <div className='logoname'>Gymanastics</div>
      </div>
      <div className='icon_contain'>
        <GiSeaCreature className='logostyle' />
        <div className='logoname'>Lake&Sea</div>
      </div>
    </div>
  )
}

export default Header
