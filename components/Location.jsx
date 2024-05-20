import React from 'react';
import WeatherCard from './WeatherCard';
// import { selectIcon } from './selectIcon';

export default function Location(props) {
  const { location, setLocation, data } = props;
  const locationData = data.find(
    (cityData) =>
      cityData.city.toLowerCase().trim() === location.toLowerCase().trim()
  );

  console.log('Location Data:', locationData);

  console.log({ data });
  console.log({ location });
  // console.log({ locationData });
  if (!locationData) {
    return null;
  }
  return (
    <div>
      <h1>My Location</h1>
      <WeatherCard
        value={{
          city: locationData.city,
          temperature: locationData.temperature,
          forecast: locationData.forecast,
        }}
        // selectIcon={selectIcon}
      />
    </div>
  );
}
