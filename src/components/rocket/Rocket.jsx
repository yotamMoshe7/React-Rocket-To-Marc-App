import React from 'react';
import './Rocket.css';
import rocketImage from '../../assets/rocket.png';

export const Rocket = () => {
  return (
    <div className='rocket-wrapper'>
      <img src={rocketImage} alt='rocket' className='rocket-image' />
    </div>
  );
};
