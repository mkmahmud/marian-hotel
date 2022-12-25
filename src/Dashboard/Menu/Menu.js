import { Box, Button, Container, Stack } from '@mui/material';
import React from 'react';
import logo from '../../assets/logo.png'
import Avatar from '@mui/material/Avatar';
import {  deepPurple } from '@mui/material/colors';
import { Flexbox } from '../Styled/FlexBox/Flexbox';

const Menu = () => {
    return (
        <Container   >
            <Flexbox justifyContent='space-between' sx={{
               padding:'1rem'
            }}>
                <Box>
                    <img src={logo} alt="logo" style={{
                        height:'50px'
                    }} />
                </Box>

                <Stack direction='row' spacing={1}>
                    <Button variant="outlined">Pending Member</Button>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                </Stack>
            </Flexbox>
        </Container>

    );
};

export default Menu;