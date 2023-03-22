import React, { useState, useEffect, useContext } from 'react';
import InventoryData from '../Data/InventoryData';
import { useParams } from 'react-router-dom';

const InventoryContexts = React.createContext()

export function useInventoryContext() {
    return useContext(InventoryContexts)
}

export default function AppContext({ children }) {

    const [cart, setCart] = useState([])
    const [inventory, setInventory] = useState(InventoryData)
    const [selectedProduct, setSelectedProduct] = useState([])
    const [tempCart, setTempCart] = useState([]);
    const { id } = useParams();


    function handleOrderAdd(order) {
      try {
        console.log(tempCart)
        console.log("inventory", inventory)
        console.log(inventory.find(it => it.name == tempCart.item).price * tempCart.amount)

        setCart([...cart,{...order, price: inventory.find(it => it.name == tempCart.item).price * tempCart.amount}]);
        setTempCart([]);
      }
      catch(err) {
        console.log(Object.keys(order).length)
        console.log(order)
        alert("Please select a product and a Quantity")
        console.log(err)
      }

    };

    function handleTempCartChange(change) {
      console.log("tempcart changed")
      setTempCart({...tempCart, ...change})
      // console.log(change)
    };

  

    const InventoryContextValue = {
        inventory,
        selectedProduct,
        cart,
        handleOrderAdd,
        tempCart,
        handleTempCartChange
    };
  return (
     <InventoryContexts.Provider value={InventoryContextValue}>
        {children}
    </InventoryContexts.Provider>
  )
}
