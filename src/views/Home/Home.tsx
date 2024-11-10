/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Grid from '@mui/material/Grid2'
import { BannerSection, EduItem, HomeSection } from './Home.style'
import { Box, useMediaQuery } from '@mui/material'
import theme from '@/assets/theme'

export default function Home() {
  const isMobile = useMediaQuery(theme.breakpoints.down(600))
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
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
        <BannerSection>
          <Grid container sx={{ height: '100vh', width: '100%', background: '#C1F4F4' }}>
            {!isMobile && (
              <Grid size={6} sx={{ position: 'relative', '& img': { width: '80%', position: 'absolute', bottom: 0 } }}>
                <img src="/img/demo-banner.png" alt="" />
              </Grid>
            )}
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', lineHeight: 1.2, height: isMobile ? '50vh' : '100vh' }}
            >
              <Box sx={{ width: isMobile ? '90%' : '80%', margin: '20px auto' }}>
                <span style={{ fontFamily: 'Open Sans', fontSize: isMobile ? '24px' : '28px', fontWeight: 600 }}>Xin chào</span>
                <h1 style={{ fontFamily: 'Itim', margin: 0, fontSize: isMobile ? '40px' : '48px' }}>Mình là Tuyết Minh</h1>
                <span style={{ fontFamily: 'Open Sans', fontSize: isMobile ? '18px' : '20px', lineHeight: 1.5, marginTop: '8px', maxWidth: '80%' }}>
                  Mình là sinh viên Cao Đẳng Phát Thanh Truyền Hình II.
                  <br />
                  Mình rất yêu thích công việc truyền thông và mong muốn trở thành một Biên tập viên chuyên nghiệp.
                </span>
              </Box>
            </Grid>
            {isMobile && (
              <Grid
                size={12}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'end',
                  alignItems: 'center',
                  '& img': { width: isMobile ? 'auto' : '80%', height: isMobile ? '45vh' : 'auto', position: 'absolute', bottom: 0 },
                }}
              >
                <img src="/img/demo-banner.png" alt="" />
              </Grid>
            )}
          </Grid>
        </BannerSection>
        <HomeSection maxWidth={'xl'}>
          <h1 style={{ fontFamily: 'Cormorant' }}>Đôi nét về bản thân</h1>
          <Grid container sx={{ width: '100%' }}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                textAlign: isMobile ? 'center' : 'right',
                lineHeight: 2,
                fontFamily: 'Open Sans',
                fontSize: '18px',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Họ tên: Võ Tuyết Minh</span>
              <span>Sinh ngày: 10/02/1995</span>
              <span>Điện thoại: 0765 039 909</span>
              <span>E-mail: votuyetminh1002@gmail.com</span>
              <span>Địa chỉ: Thành phố Hồ Chí Minh</span>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'start',
                '& img': { height: '240px', margin: isMobile ? '20px 0 0 0' : '0 0 0 40px', boxShadow: 1 },
              }}
            >
              <img src="/img/profile.jpg" alt="" />
            </Grid>
          </Grid>
        </HomeSection>
        <HomeSection maxWidth={'xl'} sx={{ borderTop: '1px solid #c2c2c2' }}>
          <img src="/img/career-target.png" alt="" style={{ width: '200px' }} />
          <h1 style={{ fontFamily: 'Cormorant' }}>Mục tiêu nghề nghiệp</h1>
          <p style={{ fontFamily: 'Open Sans', maxWidth: '880px', textAlign: isMobile ? 'justify' : 'center', lineHeight: 1.6, fontSize: '18px' }}>
            Là một sinh viên vừa tốt nghiệp ngành truyền thông với nền tảng kiến thức vững chắc và kinh nghiệm thực tế từ các dự án học tập cũng như hoạt động câu lạc bộ trong
            trường, tôi mong muốn tìm kiếm cơ hội làm việc trong môi trường chuyên nghiệp để tiếp tục phát triển kỹ năng và học hỏi thêm về ngành truyền thông. Tôi đặc biệt quan
            tâm đến lĩnh vực sáng tạo nội dung, marketing số và quản lý dự án truyền thông, mong muốn đóng góp giá trị cho doanh nghiệp qua những ý tưởng sáng tạo, cập nhật xu
            hướng mới và tinh thần học hỏi không ngừng.
          </p>
          <span style={{ fontFamily: 'Cormorant', fontSize: '20px', fontWeight: 500, marginLeft: isMobile ? 'auto' : 0 }}> - Võ Tuyết Minh -</span>
        </HomeSection>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              width: '100%',
              aspectRatio: isMobile ? 4 / 3 : 3.6,
              backgroundImage: 'url(img/vovc.png)',
              backgroundAttachment: isMobile ? 'scroll' : 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></Box>
          <HomeSection maxWidth={'xl'}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', gap: '12px' }}>
              <img src="/img/edu-icon.png" alt="" style={{ width: '64px' }} />
              <h1 style={{ fontFamily: 'Cormorant', fontSize: '48px', margin: 0, paddingTop: '10px' }}>Đào tạo</h1>
            </Box>
          </HomeSection>
        </Box>
        <HomeSection>
          <Grid container sx={{ width: '100%' }}>
            <EduItem size={{ xs: 12, md: 4 }}>
              <img src="/img/vovc_edu.png" alt="" />
              <h2>Cao Đẳng Phát Thanh Truyền Hình II</h2>
              <span>Chuyên ngành: Truyền thông đa phương tiện</span>
              <p>
                Hoàn thành xuất sắc các môn học, <br />
                đặc biệt với các môn học chuyên ngành.
                <br />
                Học lực: Giỏi
              </p>
            </EduItem>
            <EduItem size={{ xs: 12, md: 4 }}>
              <img src="/img/datphi.png" alt="" />
              <h2>Khóa Học Diễn Viên Lồng Tiếng Cơ Bản</h2>
              <span>Trung Tâm: Đạt Phi Media</span>
              <p>
                Kinh nghiệm về chuyển âm, lồng tiếng, kịch bản chuyển âm cho điện ảnh và TVC.
                <br />
                Tốt nghiệp: Xuất sắc
              </p>
            </EduItem>
            <EduItem size={{ xs: 12, md: 4 }}>
              <img src="/img/mc.png" alt="" />
              <h2>Khóa Học Dẫn Chương Trình Cơ Bản</h2>
              <span>Nhà Văn Hóa Thanh Niên TP. Hồ CHí Minh</span>
              <p>
                Tăng cường kiến thức, kỹ năng về dẫn chương trình, tổ chức các chương trình, sự kiện
                <br />
                Tốt nghiệp: Xuất sắc
              </p>
            </EduItem>
          </Grid>
        </HomeSection>
      </Box>
    </>
  )
}
