import React, { useState } from 'react'
import { Countries} from '../const/Baza'
import RegionUzbekistan from './RegionUzbekistan'
import Region from './RegionUzbekistan'

const CountriesComp = () => {
  const [openRegion, setOpenRegion] = useState(null)
  
  const CountriesFunc = (country) => {
    if (country.title === "Uzbekistan" && openRegion == null) {
      setOpenRegion(<RegionUzbekistan/>)
    }
    else{
      setOpenRegion(null)
  }
  }

  return (
    <div className="cards">
      {Countries.map((country, index) => (
        <div onClick={() => CountriesFunc(country)} className="card" key={index}>
          <img src={country.img} />
          <div className="countries-body">{country.title}</div>
          <div className="countries-descreption">{country.description}</div>
        </div>
      ))}
      {openRegion !== null ? openRegion:''}
    </div>
  )
}

export default CountriesComp