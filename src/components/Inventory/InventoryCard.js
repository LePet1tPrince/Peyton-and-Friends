import React from 'react'

export default function InventoryCard(props) {
    const {
        image,
        name,
        type,
        available
        } = props;

  return (
    
    <div className="col rounded-5">
        <div className="card">
  <img src={image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h2>{name}</h2>
    <p className="card-text">{type}</p>
    <p className="card-text">Availability: {available}</p>

  </div>
</div>
      


    </div>
  )
}
