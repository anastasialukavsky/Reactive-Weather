import React from 'react';
import sunny from '../assets/Sunny.svg';
import rainy from '../assets/Rainy.svg';
import partlyCloudy from '../assets/PartlyCloudy.svg';
import cloudy from '../assets/Cloudy.svg';
// import { selectIcon } from './selectIcon';

function WeatherCard(props) {
  const { city, temperature, forecast } = props.value;

   const selectIcon = (forecast) => {
     switch (forecast.toLowerCase()) {
       case 'sunny':
         return sunny;
       case 'rainy':
         return rainy;
       case 'partly cloudy':
         return partlyCloudy;
       case 'cloudy':
         return cloudy;
       default:
         return sunny;
     }
   };
  return (
    <div className='card'>
      <div className='img-container'>
        <img
          className='card-img-top'
          src={selectIcon(forecast)}
          alt='Card image cap'
          id='icon'
        />
      </div>
      <div className='card-body'>
        <h3 className='card-title'>{city}</h3>
        <h5 className='card-text'>{temperature}</h5>
        <h5 className='card-text'>{forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;
// Export the WeatherCard
