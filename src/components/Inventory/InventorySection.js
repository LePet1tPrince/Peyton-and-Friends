import React from 'react';
import InventoryData from './InventoryData';
import InventoryCard from './InventoryCard';

export default function InventorySection() {
  return (
    <div className="fullscreen bg-light">
            <div className="text-center font-72 bold pb-5 bg-secondary">Discography</div>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                        <div className="container mx-auto mt-4">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">

                            {InventoryData.map(item => {
                                return <InventoryCard key={item.id} {...item}/>
                            })}
                            </div>
                            </div>
                            </div>
    </div>
  )
}
