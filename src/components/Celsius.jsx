import React from 'react'
import './Celsius.css'
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export default function Celsius({name}) {
  return (
    <React.Fragment>

    <div className='celsiuscontainer'>
       <div className='wheatherimg'>
        <div className='img'>
          
       
<div className='wheathericons'>
  <WbTwilightIcon className='wheathericons' fontSize='large'/>
  <br></br>
  <TipsAndUpdatesIcon  className='wheathericons' fontSize='large'/>
</div>
<span className='tempt'>
{name.sunset}
</span>
<br></br>
<span className='tempt1'>
{name.sunrise}
</span>

</div>
<div className='celsius'>
  <span className='celsius'>{name.temp}°C-{name.temp}°C</span>
  <br></br>
  <div className='main'><b>
  {name.main},{name.description}
  </b>
  </div>
  {/* <img src="./assets/background.jpg"></img> */}
  {/* <img src={name.sunset}></img> */}
</div>

       </div>
    
    </div>
    
      </React.Fragment>
  )
}
