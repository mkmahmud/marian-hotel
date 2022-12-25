import { Box, styled } from "@mui/material";



export const SearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent:'center',
    '& input': {
        width: '70%',
        height: '50px',
        padding: '0px 30px',
        outline: 'none',
        fontSize: '22px',
        width: '70%',
        borderRadius: ' 50px 0px 0px 50px'
    },
    '& button': {
        width: '70%',
        height: '50px',
        padding: '0px 30px',
        outline: 'none',
        fontSize: '22px',
        background: 'green',
        width: '30%,',
        borderRadius: ' 0 50px 50px 0'
    }
}))