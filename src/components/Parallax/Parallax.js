import React from 'react';
import parallaxImage from '../../assets/images/parallax-image.jpg';
import BioList from '../BioList/BioList';
import { Parallax } from 'react-scroll-parallax';
import 'materialize-css';
// import './ParallaxStyles.css';
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';

const ParallaxPage = () => {
  return (
    <div>
      <Parallax 
        speed={-50}
        translateY={[-20, 10]}
      >
        <img src={parallaxImage} alt='parallax' className='absolute' />
      </Parallax>
      <Parallax speed={60}>
        <BioList />
      </Parallax>
    </div>
  );
};

export default ParallaxPage;