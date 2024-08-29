import stytles from './listProducts.module.css';
import { BASE_URL_API } from '../../Api';
import { useEffect, useState } from 'react';
export const ListProducts = () => {
    const [data, setData] = useState([]);

    const listDataProducts = async () => {
        const res = await fetch(`${BASE_URL_API}/products`);
        const response = await res.json();
        console.log(response);

    }
    useEffect(() => {
        listDataProducts();
    }, []);


    return(
        <>
            {data.map((item, index))}
        </>
    )
}