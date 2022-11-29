import React from 'react';
import './Main.css';
import SearchIcon from '@mui/icons-material/Search';


export default function Main({change,Submit}) {
  return (
    <React.Fragment>
<div className='search'>
<form onSubmit={Submit}>
<div className='inputfield'>
<input type="text" placeholder='Search' className='inputfield' onChange={change}></input>
<div className='searchicon'>
<SearchIcon />
</div>
</div>
</form>



</div>
</React.Fragment>
  )
}
