import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightwithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightwithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-Examples/PokemoPage'
import { FocusScreen } from './04-useRef/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrambleWords />
  </StrictMode>,
)
