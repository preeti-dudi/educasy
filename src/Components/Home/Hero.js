import React from 'react';
import Buttons from './Buttons';
import Robot from '../../assets/Images/Robot.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p><span className='welcome'>Welcome to</span><h1 className='designed-text'>EDUCACY</h1></p>
        <p>Your go-to platform for interactive learning, progress tracking, and community discussions.</p>
        <Buttons />
      </div>
      <div className="hero-image-box">
        <img className="hero-image" src={Robot} alt="Students engaging in interactive learning" />
      </div>
    </section>
  );
};

export default Hero;
