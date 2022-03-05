import React from 'react';
import parallaxImage from '../../assets/images/parallax-image.jpg';
import styles from './ParallaxStyles.css'

console.log(styles);
const Parallax = () => {
  return (
    <div className="">
        <img className="fixed top-0 left-0 h-1-1/2" src={parallaxImage} alt=' parallax imaage' />
      
    </div>
  );
};

export default Parallax;