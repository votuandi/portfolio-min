import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles({
  name: 'MainLayout',
  uniqId: 'main_layout',
})(() => {
  return {
    menuItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      flex: 1,
      cursor: 'pointer',
      height: '100%',

      '&:hover': {
        backgroundColor: '#629b5c30',
      },
    },
  }
})

export default useStyles
