import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Wheather from './components/Wheather';
import React from 'react';
import { useState } from 'react';
import Celsius from './components/Celsius';
import Day from './components/Day';
import Loader from './Loader';
import axios from 'axios';

function App() {
  const [State, setState] = useState({
    value: '',
    current: {},
    weekInfo: [],
    loading: false,
    error: false,
  })
  const InputChange = (e) => {
    setState({ ...State, value: e.target.value })
    console.log(State)
  }
  const handleSearchCity = (a) => {
    a.preventDefault()


    // console.log(State.value)
    setState({ ...State, loading: true })
    console.log(State)
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${State.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
      .then(response => {
        // console.log("response====>",response.data)
        // console.log("cityname====>",response.data.city.name)
        // console.log("clouds====>",response.data.list[0].clouds)
        // console.log("sunset====>",response.data.list[0].sunset)
        // console.log("sunrise====>",response.data.list[0].sunrise)
        // console.log("day====>",response.data.list[0].temp.day)
        // console.log("wheather====>",response.data.list[0].weather[0])
        // console.log("rain====>",response.data.list[0].rain)
        const data = response.data
        console.group(data)
        const month = ['january', 'feb', 'march', 'april', 'may', 'june', 'july', 'agust', 'september', 'october', 'november', 'december']
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        const currentDate = new Date()
        // console.log("date----->",currentDate)
        const date = `${days[currentDate.getDay()]}${currentDate.getDate()}${month[currentDate.getMonth()]}`
        console.log("date----->", date)
        const sunset = new Date(data.list[0].sunset * 1000).toLocaleTimeString()
        console.log("sunset----->", sunset)
        const sunrise = new Date(data.list[0].sunrise * 1000).toLocaleTimeString()
        console.log("sunrise----->", sunrise)


        const current = {
          city: data.city.name,
          country: data.city.country,
          date,
          sunset,
          sunrise,
          population: data.city.population,
          description: data.list[0].weather[0].description,
          icon: data.list[0].weather[0].icon,

          main: data.list[0].weather[0].main,
          temp: data.list[0].temp.day,
          min: data.list[0].temp.min,
          max: data.list[0].temp.max,
          cloud: data.list[0].clouds,
          // humidity:data.list[0].feelslike.humidity,


        }
        console.log(current)

        const weekdata = data.list
        console.log(weekdata)
        const weekInfoo = weekdata.map((data, index) => {
          return {

            key: index,
            main: data.weather[0].main,
            day: new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).slice(0, 3),
            icon: data.weather[0].icon,
            min: data.temp.min,
            max: data.temp.max,
            temp: data.temp.day,
            description: data.weather[0].description,




          }
        })
      const  weekInfo=weekInfoo.slice(0,3)

        console.log(weekInfo)

        setState({
          ...State,
          current,
          
          weekInfo,
          loading: false,

        })



      })
      .catch(error => {
        console.log(error)
        
        setState({
          ...State,
          current:{},
          weekInfo:[],
          loading: false,
          error:true,

        })
       
      })
  


  }


  return (



    <React.Fragment>
      <Main change={InputChange} Submit={handleSearchCity} />
      {State.loading === true ?
        <Loader /> :
        <>
          {State.current.country !== undefined ?
            <>
              <div className='container'>
                <Wheather name={State.current}/>
              </div>


              
              <div className='secondcontainer'>
                <Celsius name={State.current}/>
              </div>
              <Day arr={State.weekInfo}/>
            </> :
            State.error ?
            <div className='error'>
            <p className='error'>"sorryyyy"</p>
            </div>:
            ""

          }
        </>
      }




    </React.Fragment>

  );
}

export default App;
