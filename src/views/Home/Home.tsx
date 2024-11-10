/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'

export default function Home() {
  return (
    <>
      <Head>
        <title>Võ Tuyết Minh - Sinh Viên VOVC</title>
        {/* <link rel="icon" href={icon} /> */}
        <meta name="description" content={'Mình là Võ Tuyết Minh, sinh viên Cao Đẳng Phát Thanh Truyền Hình II'} />
        <meta property="og:title" content="Võ Tuyết Minh - Sinh Viên VOVC" />
        <meta property="og:description" content={'Mình là Võ Tuyết Minh, sinh viên Cao Đẳng Phát Thanh Truyền Hình II'} />
        {/* <meta property="og:image" content={logo} /> */}
      </Head>
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <Grid container sx={{ height: '100vh', width: '100%', background: '#C2E5F0' }}>
          <Grid size={6} sx={{ position: 'relative', '& img': { width: '80%', position: 'absolute', bottom: 0 } }}>
            <img src="/img/demo-banner.png" alt="" />
          </Grid>
          <Grid size={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', lineHeight: 1.2 }}>
            <span style={{ fontFamily: 'Open Sans', fontSize: '28px', fontWeight: 600 }}>Xin chào</span>
            <h1 style={{ fontFamily: 'Itim', margin: 0, fontSize: '48px' }}>Mình là Tuyết Minh</h1>
            <span style={{ fontFamily: 'Open Sans', fontSize: '20px', lineHeight: 1.5, marginTop: '8px', maxWidth: '80%' }}>
              Mình là sinh viên Cao Đẳng Phát Thanh Truyền Hình II.
              <br />
              Mình rất yêu thích công việc truyền thông và mong muốn trở thành một ... chuyên nghiệp
            </span>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
