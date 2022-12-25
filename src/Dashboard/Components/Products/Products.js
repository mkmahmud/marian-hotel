import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { AxiosInstance } from '../../Utils/AxiosInstance';
import useProduct from '../../Hooks/useProduct';

export default function CenteredTabs() {
    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
 
    const {products} = useProduct(value+1);
    console.log(products)

    return (
        <Container>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
        </Container>
    );
}