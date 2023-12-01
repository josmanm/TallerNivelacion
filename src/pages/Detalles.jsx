import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { replaceHyphenWithSpace } from '../utils/stringsUtils'; 
import {  getProductByTitle } from '../services/productsServices';
import './detalles.scss'

const Detalles = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [productsDatails, setProductsDetails] = useState([]);
    const title = replaceHyphenWithSpace(name);

    const getProductsDetails = useCallback(() => {
        getProductByTitle(title).then((product) => {
            console.log(product);
            setProductsDetails(product)
        });
    }, [title])

    useEffect(() => {
        getProductsDetails();
    }, [getProductsDetails])

    const navigateToBack = () => navigate(-1)
    return (
        <main className='bookDetails'>
            {
                productsDatails ? (
                    <article className='box'>
                        <button className='close' onClick={navigateToBack}>X</button>
                        <h1>{productsDatails.title}</h1>
                        <h3>{`description: ${productsDatails.description}`}</h3>
                        <section className='box__info'>
                            <figure className='box__figure'>
                                <img src={productsDatails.thumbnail} alt={productsDatails.title} />
                            </figure>
                            <p>{productsDatails.description}</p>
                        </section>
                    </article>
                ) : (
                    <div>...Cargando</div>
                )
            }
        </main>
    )
}
export default Detalles