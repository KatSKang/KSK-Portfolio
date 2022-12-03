import React from "react";
import { Route, Routes, Link } from "react-router-dom"

import Header from "./Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";


export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-center mr-auto text-center py-4 px-6 text-white w-full">
          <p><Link to="/about" className="text-lg no-underline hover:text-teal-500 mx-2">About Me</Link></p>
          <p><Link to="/portfolio" className="text-lg no-underline hover:text-teal-500 mx-2">Portfolio</Link></p>

        </div>
      </nav>

      <Header />
      
        <Routes>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/portfolio' element={<Portfolio />}> </Route>
          {/* <Route path='/resume' component={resume} /></Route>
          <Route path='/contact' component={contact} /> </Route>*/}
        </Routes>
    </>
      )
}

