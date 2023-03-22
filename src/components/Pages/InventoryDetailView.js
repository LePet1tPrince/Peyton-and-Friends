import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InventoryData from '../Data/InventoryData';
// import { useInventoryContext } from '../Context/InventoryContext';
import BlankSpace from '../BlankSpace';
import OtherPatterns from '../OtherPatterns';
import { useInventoryContext } from '../Context/AppContext';


export default function InventoryDetailView() {
  const {cart, handleOrderAdd, tempCart, handleTempCartChange} = useInventoryContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const inventoryItem = InventoryData.find(item => item.id == id)
  const otherInventory = InventoryData.filter(item => item.id != id);
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  return (
    <div>
    <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
    </button>
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center border">
          <img className="inventory-image-detail rounded-3" src={inventoryItem.image}/>
        </div>
        <div className="col">
          <h1>{inventoryItem.name}</h1>
          <h3>{inventoryItem.type}</h3>
          <p>{inventoryItem.description}</p>

          <h3>In Stock: {inventoryItem.available}</h3>

          <input type="number" id="item-amount"  min="0" max="10" className="form-control" onChange={e => handleTempCartChange({amount: e.target.value})}/>

          {tempCart}


        </div>
      </div>
      </div>
      <BlankSpace/>
      {/* <div className="container">
        <h1>Other Patterns you may like</h1>
        <OtherPatterns inventory={otherInventory}/>
        


      </div> */}
    </div>  

       

  )
}
