import React from 'react';
import Home from './Components/Cart/Home.jsx';
import NavBar from './Components/Cart/NavBar.jsx';
import Cart from './Components/Cart/Cart.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




import './App.css'





const App=()=>{

  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />


    </Routes>
    </BrowserRouter>

    
    
    
    
  )
    
    

    


  
}


export default App;