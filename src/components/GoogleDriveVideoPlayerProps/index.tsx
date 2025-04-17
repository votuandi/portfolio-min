import React from 'react'
import { Box } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

interface GoogleDriveVideoPlayerProps {
  videoId: string
  styles?: SxProps<Theme>
}

const GoogleDriveVideoPlayer: React.FC<GoogleDriveVideoPlayerProps> = ({ videoId, styles }) => {
  const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`
  console.log(videoUrl)

  return (
    <Box sx={{ ...styles }}>
      <iframe src={videoUrl} width="100%" height="100%" allow="autoplay" allowFullScreen title="Google Drive Video" style={{ border: 'none' }}></iframe>
    </Box>
  )
}

export default GoogleDriveVideoPlayer
