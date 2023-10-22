import './App.css'
import CustomFooter from './components/CustomFooter'

import { CustomHeader } from './components/CustomHeader'
import { CustomMain } from './components/CustomMain'

function App() {


  return (
    <>
      <CustomHeader />
      <CustomMain />
      <CustomFooter texto="2023 Merillas. Todos los derechos reservados." />
    </>
  )
}

export default App
