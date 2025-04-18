/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Grid from '@mui/material/Grid2'
import { HomeSection } from './Skill.style'
import { Box, Typography, useMediaQuery } from '@mui/material'
import theme from '@/assets/theme'

const skills = [
  {
    title: 'Sáng tạo nội dung',
    description: ['Viết kịch bản (phim ngắn, viral clip, MV)', 'Sản xuất chương trình', 'Sáng tạo ý tưởng truyền thông.'],
    image: '/img/create.jpg',
  },
  {
    title: 'Quay dựng & Thiết kế',
    description: ['Quay dựng video cơ bản (Premiere, Capcut)', 'Thiết kế hình ảnh (Canva, Photoshop cơ bản).'],
    image: '/img/dung-phim.jpg',
  },
  {
    title: 'Lồng tiếng',
    description: 'Kỹ năng diễn xuất giọng nói phù hợp đa dạng thể loại nội dung.',
    image: '/img/long-tieng.jpg',
  },
  {
    title: 'Quản lý & Tổ chức',
    description: ['Lãnh đạo nhóm', 'Lập kế hoạch', 'Tổ chức sự kiện.'],
    image: '/img/su-kien.jpeg',
  },
  {
    title: 'Kỹ năng mềm',
    description: ['Giao tiếp, làm việc nhóm', 'Giải quyết vấn đề', 'Quản lý thời gian.'],
    image: '/img/su-kien.jpg',
  },
  {
    title: 'Công cụ',
    description: ['Microsoft Office', 'Google Workspace', 'Các mạng xã hội (TikTok, Instagram, Zalo).'],
    image: '/img/office.jpg',
  },
]

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isMobile = useMediaQuery(theme.breakpoints.down(600))
  return (
    <>
      <Head>
        <title>Kỹ năng | Võ Tuyết Minh - Sinh Viên VOVC</title>
        <meta name="description" content={'Mình là Võ Tuyết Minh, sinh viên Cao Đẳng Phát Thanh Truyền Hình II'} />
        <meta property="og:title" content="Võ Tuyết Minh - Sinh Viên VOVC" />
        <meta property="og:description" content={'Mình là Võ Tuyết Minh, sinh viên Cao Đẳng Phát Thanh Truyền Hình II'} />
      </Head>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
        <HomeSection maxWidth={'xl'}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 800, fontFamily: 'Cormorant', py: '40px' }}>
            Kỹ năng
          </Typography>
          <Box sx={{ width: '100%' }}>
            {skills.map((skill, index) => {
              const isTextLeft = index % 2 === 0
              return (
                <Grid container component="div" key={index} spacing={2} direction={isTextLeft ? 'row' : 'row-reverse'} alignItems="center" width="100%">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: isMobile ? 'center' : isTextLeft ? 'end' : 'start' }}>
                      <Typography variant="h4" sx={{ fontFamily: 'Montserrat', fontWeight: 700 }}>
                        {skill.title}
                      </Typography>
                      {Array.isArray(skill.description) ? (
                        <Box
                          component="ul"
                          sx={{
                            listStyle: 'none', // Remove default bullets
                            paddingLeft: 0, // Remove default padding
                            '& li': {
                              position: 'relative',
                              paddingLeft: '1.5em', // Space for custom bullet
                              marginBottom: '0.5em', // Spacing between list items
                            },
                            '& li::before': {
                              content: '"👉"', // Custom bullet emoji
                              position: 'absolute',
                              left: '-10px',
                              fontSize: '1.2em', // Adjust emoji size
                            },
                          }}
                        >
                          {skill.description.map((s, ind) => (
                            <li key={ind}>
                              <Typography variant="body1" sx={{ fontFamily: 'Quicksand' }}>
                                {s}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      ) : (
                        <Typography variant="body1" sx={{ fontFamily: 'Quicksand', marginTop: '14px' }}>
                          {skill.description}
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        width: '100%',
                        minHeight: 300,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundImage: `url("${skill.image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  </Grid>
                </Grid>
              )
            })}
          </Box>
        </HomeSection>
      </Box>
    </>
  )
}
