
import POS from './components/pos/POS'
// import { normalizeAllData } from './redux/reducer'

import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  // const dispatch = useDispatch();

  
  // normalizeAllData()
  // useEffect(()=> {
  //   dispatch()
  // }, [])

  return (
    <>
     <POS />
    </>
  )
}

export default App
