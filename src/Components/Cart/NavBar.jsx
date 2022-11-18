import React from "react";
import { FaShoppingCart} from "react-icons/fa";


import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const {totalItems} = useSelector((state)=>state.ShoppingCart);

  return (
    <>
    
      
    <nav className="nav-bar">
       <NavLink to="/" className="text">


      <h2>OnlineShop</h2>
    </NavLink>

    <div className="icon" >
      <NavLink to="/cart" className="color">
        
      <FaShoppingCart/>
      </NavLink>
      <span className="no">{totalItems}</span>
    </div>
    </nav>
    
      
    </>
  );
};

export default NavBar;
