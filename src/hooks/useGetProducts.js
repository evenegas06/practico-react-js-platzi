import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        /* uso de fetch */
        // const response = await fetch(API);
        // setProducts(await response.json());

        /* uso de axios */
        const response = await axios(API);
        // console.log(response);
        setProducts(response.data);
    }, []);

    return products;
};

export default useGetProducts;