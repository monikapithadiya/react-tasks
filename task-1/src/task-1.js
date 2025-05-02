import React from 'react';
import './task-1.css';


const PlantCard = () => {
  return (
    <div className="main-container">
      <div className="card">
        <div className="top-bar">
          <p className="back-text">← BACK TO ALL PLANTS</p>
       
        </div>
        <div className="card-content">
          <div className="plant-image">
            <img
              src="https://images.pexels.com/photos/12168855/pexels-photo-12168855.jpeg"
              alt="Classic Peace Lily"
            />
          </div>
          <div className="details-section">
            <h2>CLASSIC PEACE LILY</h2>
            <p className="subheading">POPULAR HOUSE PLANT</p>
            <p className="price">$18</p>
            <p className="description">
              Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.
            </p>
            <div className="buttons">
              <button className="add-cart">ADD TO CART</button>
              <button className="wishlist">WISHLIST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
