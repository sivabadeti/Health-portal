import './App.css';
import {Routes, Route } from "react-router-dom";
import Upload from './components/upload';
import Home from './components/home';
import AboutUs from './components/aboutus';
import Udetails from './components/uploadeddetails';
import Loginpage from './components/loginpage';
import PatientsList from './components/dashboard';



function App() {
  return(
    <Routes>
      <Route path='/' element={<Loginpage/>}/>
       <Route path='/Home' element={<Home/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/Udetails' element={<Udetails/>}/>
      <Route path='/logout' element={<Loginpage/>}/>
      <Route path='/dash' element={<PatientsList/>}/>


    </Routes>
  )
}
export default App;

