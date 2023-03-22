import React, { useRef, useState, useEffect } from 'react';
import butterflys from '../images/fabric/butterflys.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InventoryData from './Data/InventoryData';
import { useInventoryContext } from './Context/AppContext';

export default function Cart() {
    const {cart, handleOrderAdd,tempCart, handleTempCartChange} = useInventoryContext();
    const [inventory, setInventory] = useState(InventoryData);
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    function handleCartOrderAdd(tempCart) {
      handleOrderAdd(tempCart)


    }


  return (
    <div>
        <div className="mb-3 form-floating container">
                    <div className="row">
                      <div className="col">
                      {/* <label for="item" className="contact-form__label">Item</label> */}
                      <select id="item" name="item" className="form-control" onChange={e => handleTempCartChange({item: e.target.value, id: timestamp})} value={tempCart.item}>
                      <option label="Choose Item" disabled></option>
                      {inventory.map(item => {
                        return <option key={item.id} value={item.name} disabled={item.available == 0}>{item.name} - {item.available}</option>
                      })}
                    </select>
                    {/* <label for="floatingInput"> Item</label> */}

                      </div>
                      <div className="col form-floating">
                        <input type="number" id="itemAmount"  min="0" max="10" className="form-control" onChange={e => handleTempCartChange({amount: e.target.value, id: timestamp})}/>
                      <label for="floatingInput" className="contact-form__label">Amount </label>

                      </div>
                    <div className="col">
                    <button className="btn btn-secondary"
                     onClick={() => handleOrderAdd(tempCart)}
                     >Add to Order</button>

                    </div>
                    {cart.map(cartItem => {
                      return <div className="card cart-card m-3" key={cartItem.id}>
                      <div className="card-header">
                        {cartItem.item}
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
