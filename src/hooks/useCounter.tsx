import React, { useState } from 'react'

export const useCounter = (initialValue: number = 1 ) => {

    const [counter, setcounter] = useState(initialValue);

    const increment = () => {
        setcounter(c => c + 1);
    }
    const decrement = () => {
        if(counter <= 1) return;
        setcounter(c => c - 1);
    }

  return {
    //props
    counter, 
    //methods
    decrement, increment
  }
}
