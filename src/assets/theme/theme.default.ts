import { createTheme } from '@mui/material/styles'

// import appColors from './appColor'

const muiTheme = createTheme()

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 600,
      lg: 900,
      xl: 1200,
    },
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  palette: {
    primary: {
      main: '#26787c',

      contrastText: muiTheme.palette.common.white,

      //   dark: appColors.neutralDark,
      //   main: appColors.neutral,
      //   light: appColors.neutralLight,
      // }
    },
    secondary: {
      dark: muiTheme.palette.common.white,
      main: muiTheme.palette.common.white,
      light: muiTheme.palette.common.white,
    },
    // secondary: {
    //   dark: appColors.neutralDark,
    //   main: appColors.neutral,
    //   light: appColors.neutralLight,
    // },
    // error: {
    //   main: appColors.error,
    //   contrastText: muiTheme.palette.common.white,
    // },
    // background: {
    //   default: appColors.neutralLightest,
    // },
    // divider: appColors.neutralLight,
    // text: {
    //   primary: appColors.neutralDark,
    //   secondary: appColors.neutral,
    //   disabled: appColors.neutral,
    // },
    // common: {
    //   ...appColors,
    // },
  },
})

export default defaultTheme
