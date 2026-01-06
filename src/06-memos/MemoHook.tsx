import React, { useCallback, useState } from 'react'
import { MyTitle } from './ui/MyTitle'
import { MySubTitle } from './ui/MySubTitle';

export const MemoHook = () => {

    const [title, setTitle] = useState("Hola");
    const [subTitle, setSubTitle] = useState("Mundo");

    //Use Callback es como un useEffect que necesita de argumentos tambien 
    // Solo se actualiza si en caso hay algún cambio
    // no obstante memo y useCallback se prevee que haya cambios
    const handleMyAPICall = useCallback(() => {
      console.log("LLamar a mi API", subTitle);
    }, [subTitle] );

  return (
   <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-white'>MemoApp</h1>
 
  <MyTitle title={title} /> 

  <MySubTitle subtitle={subTitle}  callMyAPI={handleMyAPICall} />
 
 <h5> Mi Subtitulo </h5>
   <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
    onClick={()=> setTitle("Hello, " + new Date().getTime())}
   >
    Cambiar Titulo
  </button>
   <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
   onClick={ () => setSubTitle("World")}>
    Cambiar SubTitulo
  </button>
    </div>
  )
}
