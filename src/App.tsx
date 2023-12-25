import './App.css'
import HeaderComponent from './components/HeaderComponent'
import { CustomMain } from './components/CustomMain';
import CustomFooter from './components/CustomFooter';

function App() {

  const options = ['InicioDinamico', 'Acerca deDinamico', 'ContactoDinamico'];

  const customStles = {
    backgroundColor: 'red',
    color: 'white'
  }


  return (
    <>
      <HeaderComponent texto='Encabezado desde componente' options={options} customHeaderStyles={customStles} />
      <CustomMain />
      <CustomFooter texto="2023 Merillas. Todos los derechos reservados." />
    </>
  )
}

export default App
