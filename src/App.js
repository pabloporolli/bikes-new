// import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main/Main';
import './index.css';


const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer saludo='Hola, bienvenido a Bike. Acá podrás encontrar las mejores bicicletas para vos.'/>
      <Main/>
      <Footer/>
    </>
  )
}


export default App;
