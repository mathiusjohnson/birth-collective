import React, { useEffect, useRef } from 'react'
import BioList from '../BioList/BioList'
import styles from './ParallaxStyles.css'

console.log(styles)
const Parallax = () => {
  const parallaxRef = useRef()

  useEffect(() => {
    console.log(document.body.scrollHeight)
    const body = document.body
    const html = document.documentElement
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    console.log(height)
    if (typeof window != 'undefined') {
      // needed if SSR
      parallaxRef.current.style.height = document.body.scrollHeight + 'px'
      console.log('height: ', parallaxRef.current.style.height)
      window.addEventListener('scroll', () => {
        let offset = window.pageYOffset
        parallaxRef.current.style.backgroundPositionY = offset * 0.5 + 'px'
      })
    }
  }, [])

  return (
    <div ref={parallaxRef} className='parallax'>
      <BioList />
    </div>
  )
}

export default Parallax
