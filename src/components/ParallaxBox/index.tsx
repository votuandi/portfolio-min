import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'

interface ParallaxBoxProps {
  src: string
  aspectRatio?: number
}

const ParallaxBox: React.FC<ParallaxBoxProps> = ({ src, aspectRatio = 4 / 3 }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio,
        backgroundImage: `url(${src})`,
        backgroundPosition: `center ${offset * 0.5}px`, // adjust multiplier to control parallax effect
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></Box>
  )
}

export default ParallaxBox
