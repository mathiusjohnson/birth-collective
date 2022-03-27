import React, { useEffect, useRef } from 'react'
import BioList from '../BioList/BioList'
import { handleScroll } from './parallaxHelpers'
import './ParallaxStyles.css'

const Parallax = () => {
  const parallaxRef = useRef()

  useEffect(() => {
    if (typeof window != 'undefined') {
      // needed if SSR

      window.addEventListener('scroll', () => {
        handleScroll(parallaxRef, window)
      })
    }
  }, [])

  return (
    <div ref={parallaxRef} className='parallax  -mt-12'>
      <BioList />
    </div>
  )
}

export default Parallax
