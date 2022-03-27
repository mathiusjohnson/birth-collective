export const handleScroll = (parallaxRef, window) => {
  let offset = window.pageYOffset
  return (parallaxRef.current.style.backgroundPositionY = offset * 0.5 + 'px')
}
