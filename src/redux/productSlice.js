import { createSlice } from "@reduxjs/toolkit";
import products from "../Components/Cart/Api.jsx";



export const ShoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState: {
    
    products,
    selectedItems:[],
    totalItems:0,
    totalAmount:0,
  },
  reducers: {
    removeItem(state, action) {
      state.selectedItems = state.selectedItems.filter((curr) => {
        return curr.id !== action.payload;
      });
    },

    clearCart(state, action) {
      state.selectedItems = [];
    },

    increment(state, action) {
      state.selectedItems.map((curr) => {
        if (curr.id == action.payload) {
          return (curr.quantity = curr.quantity + 1);
        }
      });
    },

    decrement(state, action) {
      state.selectedItems.map((curr) => {
        if (curr.id == action.payload) {
          return (curr.quantity =curr.quantity >= 1 ? curr.quantity-1 : curr.quantity);
            
        }

       state.selectedItems = state.selectedItems.filter((elem)=>{
          return (elem.quantity !== 0);
        })

        }
      );
    },

    getTotals(state,action){
      state.totalItems=state.selectedItems.reduce((sum,selectedItems)=>{
        return sum + selectedItems.quantity;



      },0)
    },

    amount(state,action){
      state.totalAmount=state.selectedItems.reduce((sum,selectedItems)=>{
        return sum + selectedItems.price*selectedItems.quantity;



      },0)

    },

    addToCart(state,action){
      
      

   state.products.map((curr,i)=>{
    if(i==action.payload){
      return curr.isSelected=true;
    }
   })



    state.selectedItems=[...state.selectedItems,state.products[action.payload]];

      

    }
  },
});

export const { removeItem, clearCart, increment, decrement,getTotals,amount ,addToCart} =
  ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;
