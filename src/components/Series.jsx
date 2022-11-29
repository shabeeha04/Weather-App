import React from 'react'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Series(props) {
  console.log("props",props);
  // const icon=details.icon
  // console.log(icon)
  const {details, name} = props
 
  return (
    <div className='col-lg-4'>
    <div className='seriescontainer '>
<div className='firstwheather'>
<p className='text'>{details.day}</p>
<img src={`https://openweathermap.org/img/w/${details.icon}.png`} className="iconimg"></img>
{/* <ThunderstormIcon fontSize='large' className='icons'/><br></br> */}
<p className='textwheather'>{details.temp}°C-{details.temp}°C</p>
<p className='textseason'><b>{details.main}</b></p>
<p className='textstrength'>{details.description}</p>
<div className='endwheather'></div>
</div>

    </div>
    </div>
  )
}
