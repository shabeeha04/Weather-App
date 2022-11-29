import React from 'react'
import './Day.css'
import Series from './Series'


export default function Day({arr}) {
  return (
   <div className='daycontainer'>
    <div className='row'>
    {arr.map((d,key)=>

<Series details={d} name={"dddd"}/>

)}
    </div>




   </div>
  )
}
