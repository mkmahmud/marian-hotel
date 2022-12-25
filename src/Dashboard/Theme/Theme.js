import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#002B5B',
            mainbg:'#007B9B',
            hover:'#003C6C',
            graytext:'#777'
        },
        secondary: {
            main: '#2B4865',
        },
    },

    components:{
        MuiContainer:{
            defaultProps:{
                maxWidth:'xl'
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform:'uppercase',
                }
            }
        }
    }
});