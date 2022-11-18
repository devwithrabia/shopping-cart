import React, { useEffect } from "react";
import { useSelector ,useDispatch} from 'react-redux';
import {removeItem,increment,decrement,getTotals,amount,clearCart} from "../../redux/productSlice.js";
import { BiPlus, BiMinus} from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { Scrollbars } from 'react-custom-scrollbars-2';


const Cart = () => {

    const {totalAmount} = useSelector((state)=>state.ShoppingCart);
    const {selectedItems} = useSelector((state)=>state.ShoppingCart);
const dispatch = useDispatch();
    useEffect(()=>{
      console.log(selectedItems)
    })
  

  
    useEffect(()=>{

      dispatch(getTotals());
      dispatch(amount());
    },[selectedItems]);

    
  


    

     
    
        

    return ( 
    <>
    
        
            <section>
          

            
  
            <div className="products">
              <Scrollbars>
                {selectedItems.map((curr)=>{
                  const{id,name,image,price,desc,quantity} = curr;
                  return(
                    
                      <div className="single-product" key={id}>
              <div>
                <img src={image} alt="broken-phone" className="img"/>
              </div>
              <div className="desc">
                <h2>{name}</h2>
                <p>{desc}</p>
              </div>
  
              <div className="btn">
                <button className="func" onClick={()=>dispatch(increment(id))}><BiPlus/></button>
                <input 
                type="text"
                placeholder={quantity}
                className="input"/>
                <button className="func"  onClick={()=>dispatch(decrement(id))}><BiMinus/></button>
  
              </div>
  
              <div className="price">
                <h3>{`${price}rs`}</h3>
              </div>
              <div>
                <button className="delete" onClick={()=>dispatch(removeItem(id))}><RiDeleteBinFill/></button>
              </div>
              </div>
              
                  
                
  
                  )
                })}
              
              
              </Scrollbars>
              
            </div>
            <div className="total">
  
              <div className="two-div">
              <button className="div-btn" onClick={()=>dispatch(amount())}>Total Amount</button>
              <h3>Card Total:{totalAmount}</h3>
  
              </div>
  
              <div>
              <button className="div-btn" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
  
              </div>
  
  
            </div>
          </section>

        
    
  
    </> 
    );
}
 
export default Cart;