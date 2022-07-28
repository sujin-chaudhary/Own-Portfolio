import './App.scss';
import Header from './Components/jsx/Header';
import Nav from './Components/jsx/Nav';
import About from './Components/jsx/About';
import Experience from './Components/jsx/Experience';
import Services from './Components/jsx/Services';
import Portfolio from './Components/jsx/Portfolio';
import Contact from './Components/jsx/Contact';
import Footer from './Components/jsx/Footer';

function App() {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
