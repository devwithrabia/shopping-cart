import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../redux/productSlice";





const Home = () => {
  const { products } = useSelector((state) => state.ShoppingCart);




  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(products);
    
  })


  
  
  return (
    <div>
    
    <>
    <div className="container">
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
    </div>

    <div className="frame">
      {products.map((curr) => {
        const { name, image, desc, price, isSelected,id } = curr;
        return (
          <div key={id} className="item">
            <h3 className="name">{name}</h3>

            <div>
              <img src={image} alt="error" className="image" />
            </div>

            <div className="info">
              <div>{desc}</div>
              <div className="price">{`${price}rs`}</div>
            </div>
            {isSelected?(<NavLink to="/cart">
              <button
                disabled={isSelected}
                className="addtocart-active"
                onClick={() => dispatch(addToCart(id))}
              >
                Add To Cart
              </button>
              </NavLink>):(<NavLink to="/cart">
              <button
                disabled={isSelected}
                className="addtocart"
                onClick={() => dispatch(addToCart(id))}
              >
                Add To Cart
              </button>
              </NavLink>)}
            

              


          </div>
        );
      })}
    </div>
  </div>
  </>

</div>

    
  );
};

export default Home;
