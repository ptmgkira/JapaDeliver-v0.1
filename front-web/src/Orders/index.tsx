import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepsHeaders from './StepsHeaders';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {
   
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error))
  }, [])


    return (
        <div className="orders-container">
            <StepsHeaders />
            <ProductsList products={products}/>
        </div>
    )
}

export default Orders;