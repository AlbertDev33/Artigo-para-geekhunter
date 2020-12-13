import React from 'react';
import { GetServerSideProps } from 'next';

import api from '../service/api';

interface IProducts {
    id: number;
    title: string;
}

interface ProductProps {
  products: IProducts[];
}

export default function Home({ products }: ProductProps) {
    return (
      <div>
        <h1>Products</h1>
      
        <section>
          <ul>
            {products.map(product => {
                return (
                    <li key={product.id}>
                      {product.title}
                    </li>
                  )
              })}
          </ul>
        </section>
      </div>
    )
}
  
export const getServerSideProps: GetServerSideProps<ProductProps> = async () => {
  const response = await api.get('http://localhost:3333/products');

  const products = await response.data;

  return {
    props: {
      products,
    }
  }
}