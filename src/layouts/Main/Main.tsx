import React from 'react'
import { Box } from '@mui/material'
import AppHeader from '@/components/AppHeader'

type MainProps = {
  children: React.ReactNode
}

const Main = (props: MainProps) => {
  const { children } = props

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <AppHeader />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'start',
          // alignItems: 'center',
          // paddingTop: '60px',
        }}
      >
        {children}
      </Box>
      {/* <AppFooter /> */}
    </Box>
  )
}

export default Main
