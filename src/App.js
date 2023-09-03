

import Home from './Home';
import { Route, Routes,Navigate} from "react-router-dom";
import About from './About';
import Service from './Service';
import Contact from './Conatct';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <>  
    <Navbar/> 
    <Routes>
    
    <Route exact  path="/" element = {<Home/>}/>
    <Route exact path="/about" element = {<About/>}/>
    <Route exact path="/service" element = {<Service/>}/>
    <Route exact path="/contact" element = {<Contact/>}/>
    <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
     
    </>
  );
}

export default App;
