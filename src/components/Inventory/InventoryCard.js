import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function InventoryCard(props) {
    const {
        id,
        image,
        name,
        type,
        price,
        available
        } = props;

    const navigate = useNavigate();

  return (
    
    <div className="col rounded-5 g-5">
        <div className="card">
  <div className="d-flex justify-content-center">
  <img src={image} className="card-img-top inventory-img" alt="..."/>

  </div>
  <div className="card-body">
    <h2>{name}</h2>
    <p className="card-text">{type}</p>
    <p className="card-text">Availability: {available}</p>
    <p>${price}</p>
    <Link to={`/inventory/${id}`}>
      <div className="btn btn-primary">View Details</div>
    </Link>

  </div>
</div>
      


    </div>
  )
}
