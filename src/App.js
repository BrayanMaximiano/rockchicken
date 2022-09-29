import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Cardapio from './components/Cardapio'
import Footer from './components/Footer'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    Aos.init({duration:1500})
  },[])

  return (
    <>
    <Header />
    <LandingPage />
    <Cardapio />
    <Footer />
    </>
  );
}

export default App;
