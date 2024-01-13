import './Main.css';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import OurWork from './components/OurWork/OurWork';
import Carrusel from './components/Carrusel/Carrusel';
import Marketing1 from './components/Marketing1/Marketing1';
import Marketing2 from './components/Marketing2/Marketing2';
import Features from './components/Features/Features';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

function Main() {
  return (
    <>
      <Home />
      <Sponsors />
      <OurWork />
      <Carrusel />
      <Marketing1 />
      <Marketing2 />
      <Features />
      <GetStarted />
      <Footer />
      <Copyright />
    </>
  );
}

export default Main;
