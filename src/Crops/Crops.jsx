import React from 'react';
import {useCart} from '../Crops/Cart/CartContext';
import crops from '../assets/cropsData/cropsList.json';
import './Crops.css'; // Import the CSS file for styling
export default function Crops() {
  const {addToCart} = useCart();
  return (
    <div className="crop-list">
      {crops.map(crop => (
        <div key={crop.id} className="crop-card">
          <img className='crops-images' src={crop.imagesURL} alt={crop.name} />
          <h3>{crop.crop}</h3>
          <p>{crop.description}</p>
          <p>Price: ₹{crop.price} /kg</p>
          <button className='add-tobag' onClick={() => addToCart(crop)}>Add to bag</button>
          <button className='wishlist-button'>Wishlist❤️</button>
        </div>
      ))}
    </div>
  );
}
