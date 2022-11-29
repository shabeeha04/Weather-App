import React from 'react'
import './Wheather.css'

export default function Wheather({name}) {
 
  return (
  <React.Fragment>

<div className='wheathercontainer'>
    <div className='city'>
      <br></br>
      {/* <br></br> */}
<span id='city'>{name.city},{name.country}</span>
<br></br>
<span className='date'>{name.date}</span>
<br></br>
<span className='date'><b>population:{name.population}</b></span>
</div>

</div>

  </React.Fragment>
  )
}
