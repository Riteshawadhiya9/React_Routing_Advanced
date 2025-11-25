import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Not_Found from "./Pages/Not_Found";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Nav2 from "./Components/Nav2";

const App = () => {
  return (
    <div className="h-screen bg-black  text-white">
      <Navbar />
      <Nav2/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}> // nested routing k liye ye route aise bnaya hai
          <Route path='men' element={<Men/>}></Route>     
          <Route path='women' element={<Women/>}></Route>     
          <Route path='kids' element={<Kids/>}></Route>     
        </Route>
        {/* <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        <Route path='/product/kids' element={<Kids/>}/> */}

        <Route path="/courses" element={<Courses/>} />// dynamic routing k liye ye route bnaya hai 
        <Route path='/courses/:id' element={<CourseDetails/>}/> // this is dynamic routing jisme :id jo hai wo variable hai(matlab id ki jagha kuch bhi likh skte hai) jo alag alag course k id ko represent karega

        <Route path="*" element={<Not_Found />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
