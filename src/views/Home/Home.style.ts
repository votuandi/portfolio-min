import { Box, Container, Grid2, styled } from '@mui/material'

export const BannerSection = styled(Box)({
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
})

export const HomeSection = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '40px 20px',
})

export const EduItem = styled(Grid2)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '20px',
  textAlign: 'center',

  '& img': {
    borderRadius: '50%',
    width: '240px',
    height: '240px',
  },

  '& h2': {
    fontSize: '20px',
    marginBottom: '8px',
  },

  '& p': {
    margin: 0,
  },
})
