import React, { useEffect, useState } from 'react'

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};

//type TrafficLightColors = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;


export const useTrafficLight = () => {

    
const [light, setLight] = useState<TrafficLightColor>('red');
const [countdown, setCountdown] = useState(5);

useEffect(() => {

  if(countdown === 0) return;

  const intervalId = setInterval(() => {
      console.log('SetInterval');
        setCountdown((prev) => prev - 1);
    }, 1000);

    return () =>{
      clearInterval(intervalId);
    }

}, [countdown])


  return {
    //Props
    light,
    countdown,
    colors,
    // Computed / calculos
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green'? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow'? colors.yellow : 'bg-gray-500',
    redLight: light === 'red'? colors.red : 'bg-gray-500',

    // Methods

  }
}
