import { Button } from '@/components/ui/button';
import React from 'react'

interface Props{
    subtitle: string;
}


export const MySubTitle = ({subtitle}:Props ) => {
    console.log('My sub title Re-render');

    return (
    <>
    <h6> {subtitle}</h6>
    <Button className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'>
    Llamar a funcion 
    </Button>
    </>
  
  )
}
