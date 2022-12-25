import React, { useState } from 'react';
import { useEffect } from 'react';
import { AxiosInstance } from '../Utils/AxiosInstance';

const useProduct = (category) => {


    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();



    useEffect(() => {
        let url = 'products';
        if (category) {
            url = `${url}/${category}`;
        }

        const fetchData = async () => {
            setLoading(true)
            try {
                const { status, data } = await AxiosInstance.get(url)
                if (status === 200) {
                    setProducts(data)
                    setLoading(false)
                    setError('')
                }
            }
            catch {
                setLoading(false)
                setError(error.response.data.message)
            }
        }

        fetchData()

    }, [category])


    return {
        products,
        loading,
        error
    }

};


export default useProduct;