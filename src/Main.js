import './Main.css';
import Home from './components/Home/Home';
import Sponsors from './components/Sponsors/Sponsors';
import AboutUs from './components/AboutUs/AboutUs';
import OurTeam from './components/OurTeam/OurTeam';
import Features from './components/Features/Features';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Navbar from './components/Navbar/Navbar';
import HowItWorks from './components/HowItWorks/HowItWorks';

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Sponsors />
      <AboutUs />
      <HowItWorks />
      <OurTeam />
      <Features />
      <GetStarted />
      <Footer />
      <Copyright />
    </>
  );
}

export default Main;
