
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Axios } from '../Utils/Axios';

const useAxios = (urlparams) => {


    const [products, setProducts] = useState();
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    let url = 'products';

    if(urlparams) {
        url = `${url}/${urlparams}`
    }

    useEffect(()=>{
        const run = async () => {
            setloading(true)
            try{
                const {status, data} = await Axios.get(url)
                if(status === 200){
                    setloading(false)
                    setProducts(data)
                    seterror(' ')
                }
            }
            catch{
                    seterror(error.response.data.message)
            }
        }
        run()
    },[urlparams])


    return {
        products,
        loading,
        error
    };
};

export default useAxios;