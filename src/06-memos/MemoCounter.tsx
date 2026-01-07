import { useCounter } from '@/hooks/useCounter'
import React, { useMemo } from 'react'


const heavyStuff = (iterationNumber:number) =>{
  console.time('Heavy stuff started');
  for(let index=0; index< iterationNumber; index++){
    console.log('ahi vamos');
  }
  console.timeEnd('Heavy stuff end');
  return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {

    const {counter, increment}= useCounter(40_000);
    const {counter2, increment2}= useCounter(10);

    //useCallaback memoriza la funcion
    //useMemo memoriza el valor de retorno de un valor computado
    const myHeavyValue = useMemo( ()=>heavyStuff(counter), [counter]);
  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1  className='text-2xl font-bold'>Memocounter</h1>
        <hr/>

        <h4>Counter: {counter}</h4>
       
        <h4>Counter 2: {counter2}</h4>

        <button 
        className='bg-blue-500 text-white px-4 rounder-md py-2 cursor-pointer'
        onClick={increment}>
                +1
        </button>
            <button 
        className='bg-blue-500 text-white px-4 rounder-md py-2 cursor-pointer'
        onClick={increment2}>
                +1 counter2
        </button>

    </div>
  )
}
