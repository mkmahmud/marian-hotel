import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Grid, Portal, Skeleton, Stack } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { AxiosInstance } from '../../Utils/AxiosInstance';
import useProduct from '../../Hooks/useProduct';
import useAxios from '../../Hooks/useAxios';
import Product from './Product';

export default function CenteredTabs() {


    // const { loading, products } = useAxios();
    // console.log(products)

    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {loading , products} = useProduct(value+1);


    return (
        <Container>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <Box sx={{
                display:'grid',
                gridTemplateColumns:'repeat( 3, minmax(400px, 1fr) )',
                justifyItems:'center',
                gap:'8px'
            }} >
               

                {
                    loading && Array.from(new Array(6)).map((item) => (
                        <Box sx={{
                            maxWidth: 345,
                            margin: 2
                        }}>
                            <Skeleton
                                sx={{ bgcolor: 'grey.100' }}
                                variant="rectangular"
                                width={345}
                                height={200}
                            />
                            <Skeleton variant="text" sx={{ fontSize: '1rem', height: '50px' }} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem', height: '100px' }} />
                            <Stack sx={{ display: 'flex' }} spacing={2}>
                                <Skeleton width="30%" />   <Skeleton width="30%" />
                            </Stack>
                        </Box>
                    ))
                }
                
                {
                    !loading && products?.map(product => <Product data={product}></Product>)
                }


            </Box>

        </Container>
    );
}