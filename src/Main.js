import './Main.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import OurWork from './components/OurWork/OurWork';
import Network from './components/Network/Network';
import Marketing1 from './components/Marketing1/Marketing1';
import Marketing2 from './components/Marketing2/Marketing2';
import Features from './components/Features/Features';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Sponsors />
      <OurWork />
      <Network />
      <Marketing1 />
      <Marketing2 />
      <Features />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Main;
