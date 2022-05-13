import React from 'react'
import { Region } from '../const/Baza'

const RegionUzbekistan = () => {
  return (
    <div>
        {Region.map((i,index)=>(
            <div className="regions-components" key={index}>
              <button>{i}</button>
            </div>
        ))}
    </div>
  )
}

export default RegionUzbekistan