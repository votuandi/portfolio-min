import * as React from 'react'

import { Box, Container } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HEADER_MENU } from '@/assets/static/common'

const AppHeader = () => {
  const [isTransparent, setTransparent] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setTransparent(false)
      } else {
        setTransparent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      sx={{
        background: isTransparent ? 'transparent' : '#fff',
        boxShadow: isTransparent ? 'none' : 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        width: '100vw',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 16px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          padding: '8px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          alignItems: 'center',
          gap: '24px',
          fontFamily: 'Quicksand',
          '& a': { textDecoration: 'none', color: '#000' },
        }}
      >
        {HEADER_MENU.map((item) => (
          <Link href={item.href} key={item.id}>
            {item.title}
          </Link>
        ))}
      </Container>
    </Box>
  )
}

export default React.forwardRef(AppHeader)
