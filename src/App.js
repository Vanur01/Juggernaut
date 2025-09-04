import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Home'
import Service from './pages/WheelLoader'
import Sustainability from './pages/Sustainability/Sustainability';
import JEL856HEDetails from './pages/JEL856HEDetails/JEL856HE';
import ElectricRevolution from './pages/About/ElectricRevolution';
import JEL876HEDetails from './pages/JEL876HEDetails/JEL876HE';
import JEL820Details from './pages/JEL820ENDetails/JEL820EN'
import JEF235Details from './pages/JEF235TDetails/JEF235T'
import JEL866HEDetails from './pages/JEL866HEDetails/JEL866HE'
import JEL833HEDetails from './pages/JEL833HEDetails/JEL833HE'
// import UnderConstruction from './pages/UnderStruction';
import ForkiltsBanner from './pages/ForkiltsBanner'
import ExcavatorsBanner from './pages/ExcavatorsBanner';
import PortEquipmentBanner from './pages/PortEquipmentBanner';
import MiningTippers from './pages/MiningTippers';


function App() {
  return (
    <>
    {/* <UnderConstruction /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/wheel-loaders" element={<Service />} />
        <Route path="/about" element={<ElectricRevolution />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path='/services/JEL856HE' element={<JEL856HEDetails />} />
        <Route path='/services/JEL876HE' element={<JEL876HEDetails />} />
        <Route path='/services/JEL820EN' element={<JEL820Details />} />
        <Route path='/services/JEF235T' element={<JEF235Details />} />
        <Route path='/services/JEL866HE' element={<JEL866HEDetails />} />
        <Route path='/services/JEL833HE' element={<JEL833HEDetails />} />
        <Route path='/products/forklifts' element={<ForkiltsBanner />} />
        <Route path='/products/excavators' element={<ExcavatorsBanner />} />
        <Route path='/products/portEquipment' element={<PortEquipmentBanner />} />
        <Route path='/products/MiningTippers' element={<MiningTippers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
  