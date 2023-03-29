import React, { useRef, useState, useEffect } from 'react';
import butterflys from '../images/fabric/butterflys.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InventoryData from './Data/InventoryData';
import { useInventoryContext } from './Context/AppContext';

export default function Cart() {
    const {cart, setCart, handleOrderAdd,tempCart, handleTempCartChange, clearTempCart} = useInventoryContext();
    const [inventory, setInventory] = useState(InventoryData);
    const [maxCart, setMaxCart] = useState("0")
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    useEffect(() => {
      try {
        setMaxCart(inventory.find(item => item.name === tempCart.item).available).toString()

      } catch {
        setMaxCart("0")
      }

    },[tempCart])
    

    function handleCartOrderAdd(tempCart) {
      handleOrderAdd(tempCart)
      clearTempCart();


    }

    function handleCartOrderRemove(id) {
      setCart(cart.filter(item => item.id !== id))
    }


  return (
    <div>
        <div className="mb-3 form-floating container">
                    <div className="row">
                      <div className="col">
                        {JSON.stringify(tempCart)}
                        {(inventory.find(item => item.name === tempCart.item).available).toString()}
                        {/* {JSON.stringify(tempCart.amount)} */}
                      {/* <label for="item" className="contact-form__label">Item</label> */}
                      <select id="item" name="item" className="form-control" onChange={e => handleTempCartChange({item: e.target.value, id: timestamp})} value={tempCart.item}>
                      <option label="Choose Item" disabled></option>
                      {inventory.map(item => {
                        return <option key={item.id} value={item.name} disabled={item.available == 0}>{item.name} - {item.available} - ${item.price}</option>
                      })}
                    </select>
                    {/* <label for="floatingInput"> Item</label> */}
                    

                      </div>
                      <div className="col form-floating">
                        <input type="number" id="itemAmount"  min="0" max={maxCart} className="form-control" onChange={e => handleTempCartChange({amount: e.target.value, id: timestamp})} value={tempCart.amount}/>
                      <label for="floatingInput" className="contact-form__label">Amount </label>

                      </div>
                    <div className="col">
                    <button className="btn btn-secondary"
                     onClick={() => handleCartOrderAdd(tempCart)}
                     >Add to Order</button>

                    </div>
                    {cart.map(cartItem => {
                      return <div className="card cart-card m-3" key={cartItem.id}>
                      <div className="card-header">
                        <div className="row">

                        <div className="col">
                        {cartItem.item}
                        </div>
                        <button className="col cart__x-button text-end" onClick={() => handleCartOrderRemove(cartItem.id)}>&times;
                          </button>
                      </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                            <div className="col ">
                      <img src={inventory.find(item => item.name == cartItem.item).image} class="card-img-left cart-image" alt="..."></img>

                            </div>
                            <div className="col">
                                <p>Quantity: {cartItem.amount}</p>
                                <p>{inventory.find(item => item.name == cartItem.item).description}</p>
                                <p>Price: ${cartItem.price}</p>
                            </div>


                        </div>
                      </div>
                    </div>
                    })}
                    
                    

                      
                      </div>
                      
                  </div>
    </div>
  )
}
