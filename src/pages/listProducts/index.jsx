import stytles from './listProducts.module.css';
import { BASE_URL_API } from '../../Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const ListProducts = () => {
    const [data, setData] = useState([]);

    const listDataProducts = async () => {
        const res = await fetch(`${BASE_URL_API}/products`);
        const response = await res.json();
        setData(response);

    }
    useEffect(() => {
        listDataProducts();
    }, []);

    return (
        <>
            <div className={''}>
                <div className={''}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={''}>
                                <Link to= {`/ProductsId/${item.id}`}className={''}>
                                    <img src={item.images} alt ="" width={200} />
                                    <h2>{item.title}</h2>
                                    <br/>
                                    <button className= {''}>Mais informações</button>
                                </Link>
                                
                            </div>
                        )
                    })}
                </div>
            </div>    
        </>
    )



    
}