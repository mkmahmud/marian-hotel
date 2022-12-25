import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import bg from '../../Assetes/bg2.png'
import { Flexbox } from '../../Styled/FlexBox/Flexbox';
import { SearchBox } from './HeroStyle';



const Hero = () => {
    return (
        <Box sx={{
            backgroundImage: 'url(https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            height: '60vh'
        }}>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>

                <Stack spacing={5} sx={{
                    width: '70%',
                    margin: 'auto',
                    display: 'block'
                }}>

                    <Typography variant='h3' color='white' sx={{ background: '#008000b8', padding: '20px 0px' }} fontWeight='bold'>
                        Heare is One of the most live famous
                    </Typography>

                    <SearchBox margin='auto'>
                        <input type="text"  placeholder='Search' name="" id="" />
                        <button>Search</button>
                    </SearchBox>
                </Stack>
            </Box>
        </Box>
    );
};

export default Hero;


/*



background: green;
    font-size: 22px;
    padding: 0px 30px;
    width: 200px;
    height: 50px;
    border-radius: 0px 50px 50px 0px;


*/
