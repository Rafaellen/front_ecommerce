// src/pages/Home/Home.jsx
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import ProductCard from '../../components/ProductCard';
import NavBar from '../../components/NavBar';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await api.post('/cart/add', { productId, quantity: 1 });
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </>
  );
}