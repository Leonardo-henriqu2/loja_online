import styles from './productsId.module.css';
import { BASE_URL_API } from '../../Api'; 
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
export const ProductsId = () => {
    const [itemId, setItemId] = useState ([]);
    const {id} = useParams();
    const getItemId = async () => {
        const res = await fetch(`${BASE_URL_API}/products/${id}`);
        const response = await res.json();
        setItemId(response);

    }
    useEffect(() => {
        getItemId();
    })
    return (
        <>
            <h3>Listando intem específico</h3>
                <div>
                    <img src={itemId.images} alt='' width={200}/>
                    <h2>{itemId.title}</h2>
                    <strong>R$: {itemId.price}</strong>
                    <p>{itemId.description}</p>
                </div>
        </>
    )
}