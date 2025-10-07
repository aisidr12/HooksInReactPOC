import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightwithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightwithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-Examples/PokemoPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonPage />
  </StrictMode>,
)
