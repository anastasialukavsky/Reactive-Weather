import React, { useState } from 'react';
import data from './data';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
// import sunny from './assets/Sunny'
// import rainy from './assets/Rainy'
// import cloudy from './assets/Cloudy'
// import partlyCloudy from './assets/PartlyCLoudy'
// Import data and WeatherCard here

function App() {
  const [location, setLocation] = useState('New York City');

  // const selectIcon = (forecast) => {
  //   switch (forecast.toLowerCase()) {
  //     case 'sunny':
  //       return sunny;
  //     case 'rainy':
  //       return rainy;
  //     case 'partly cloudy':
  //       return partlyCloudy;
  //     case 'cloudy':
  //       return cloudy;
  //     default:
  //       return sunny;
  //   }
  // };

  return (
    <div>
      <h1 className='title'>REACTIVE WEATHER</h1>
      <h3 className='subtitle'>Up to the minute weather news</h3>
      <div className='app'>
        {data.map((value, idx) => (
          <div>
          <WeatherCard key={idx} value={value} />
          </div>
          ))}
          <Location data={data} location={location} setLocation={setLocation}/>
      </div>
    </div>
  );
}

export default App;


// <Location location={location} setLocation={setLocation} data={data} />;