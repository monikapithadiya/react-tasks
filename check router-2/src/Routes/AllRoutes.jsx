import { Route, Routes } from "react-router-dom";
import Home from "../assets/Components/Home";
import About from "../assets/Components/About";
import Contact from "../assets/Components/Contact";
import Footer from "../assets/Components/Footer";

function AllRoutes()
{
    return(

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
    
      </Routes>

    )
}
export default AllRoutes;