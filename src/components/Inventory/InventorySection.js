import React, { useEffect, useState } from 'react';
import InventoryData from '../Data/InventoryData';
import InventoryCard from './InventoryCard';

export default function InventorySection() {
  const [inventory, setInventory] = useState(InventoryData)
  
  const sweaterInventory = inventory.filter(item => item.type === "Sweater")
  const pantsInventory = inventory.filter(item => item.type === "Pants")



  return (
    <div className="fullscreen bg-light">
            <div className="text-center font-72 bold pb-5 bg-secondary">Sweaters</div>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                        <div className="container mx-auto mt-4">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">

                              {/* {JSON.stringify(sweaterInventory)} */}

                            {sweaterInventory.map(item => {
                                return <InventoryCard key={item.id} {...item}/>
                            })}
                            </div>
                            </div>
                            </div>
            <div className="text-center font-72 bold pb-5 bg-secondary">Pants</div>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                        <div className="container mx-auto mt-4">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">

                              {/* {JSON.stringify(sweaterInventory)} */}

                            {pantsInventory.map(item => {
                                return <InventoryCard key={item.id} {...item}/>
                            })}
                            </div>
                            </div>
                            </div>
    </div>
  )
}
