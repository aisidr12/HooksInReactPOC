import { useRef } from 'react'

export const FocusScreen = () => {

  const handleFocus = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    handleFocus.current?.select(); // hace que se seleccione todo el texto del input
    //handleFocus.current?.focus(); - Pone el focus en el Input
  }

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        
        <h1 className='text-2xl font-thin text-white'> Focus Screen</h1>
        <input 
        ref={handleFocus}
        type='text' 
        className='bg-white text-black px-4 py-2 rounded-md'
        autoFocus
        />
        <button
        onClick={handleClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition-colors'>
          Set focus
        </button>
    </div>
  )
}
